import React from 'react';
import {connect} from 'react-redux';

import setCurrentFlashcard from '../reducers/flashcards';

const mapStateToProps = state => ({
  flashcards: state.flashcards.flashcards,
  currentFlashcard: state.flashcards.currentFlashcard,
});

const mapDispatchToProps = dispatch => ({
  setCurrentFlashcard: (flashcard) => dispatch(setCurrentFlashcard(flashcard)),
});


const speak = (str) => {
  let message = new SpeechSynthesisUtterance(str);
  window.speechSynthesis.speak(message);
};


const Flashcard = ({ flashcards, currentFlashcard, setCurrentFlashcard }) => {
  currentFlashcard = 'howdy';

  return (
    <div>
      <button onClick={() => {
        speak(currentFlashcard);
      }}>{currentFlashcard}</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Flashcard);
