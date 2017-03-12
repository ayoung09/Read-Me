import React from 'react';
import { connect } from 'react-redux';
import * as jsDiff from 'diff';

import { writeComparison } from '../reducers/transcription';
import { setFlashcards } from '../reducers/flashcards';
import OriginText from './OriginText';


const mapStateToProps = state => ({
  currentText: state.originText.currentText,
  transcript: state.transcription.transcript,
  comparison: state.transcription.comparison,
});

const mapDispatchToProps = dispatch => ({
  writeComparison: comparisonText => dispatch(writeComparison(comparisonText)),
  setFlashcards: flashcards => dispatch(setFlashcards(flashcards)),
});


const Compare = ({ currentText, transcript, comparison, writeComparison, setFlashcards }) => {

  const diff = jsDiff.diffWords(currentText.body.toLowerCase(), transcript.toLowerCase());

  let comparisonText = '';
  let flashcards = [];

  diff.forEach(function(part){
    if (part.removed && part.value.length > 1) flashcards.push(part.value);

    let color = part.added ? 'grey' :
      part.removed ? 'pink' : 'white';
    comparisonText += `<span style="background: ${color}">${part.value}</span>`;
    });

  const createMarkup = () => ({
    __html: comparison
  });

  return (
    <div>
      <button onClick={() => {writeComparison(comparisonText);
        setFlashcards(flashcards);
      }}>How did I do?</button>
      <div>
        <OriginText currentText={currentText}/>
      </div>
      <div dangerouslySetInnerHTML={createMarkup()}></div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Compare);
