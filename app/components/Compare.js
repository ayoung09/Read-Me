import React from 'react';
import { connect } from 'react-redux';
import * as jsDiff from 'diff';

import { writeComparison } from '../reducers/transcription';


const mapStateToProps = state => ({
  currentText: state.originText.currentText,
  transcript: state.transcription.transcript,
  comparison: state.transcription.comparison,
});

const mapDispatchToProps = dispatch => ({
  writeComparison: comparisonText => {dispatch(writeComparison(comparisonText))}
});


const Compare = ({ currentText, transcript, comparison, writeComparison }) => {

  const diff = jsDiff.diffWords(currentText.body, transcript);

  let comparisonText = '';

  diff.forEach(function(part){
    let color = part.added ? 'grey' :
      part.removed ? 'pink' : 'white';
    comparisonText += `<span style="background: ${color}">${part.value}</span>`;
    });

  const createMarkup = () => ({
    __html: comparison
  });

  return (
    <div>
      <button onClick={() => {writeComparison(comparisonText)}}>How did I do?</button>
      <div dangerouslySetInnerHTML={createMarkup()}></div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Compare);
