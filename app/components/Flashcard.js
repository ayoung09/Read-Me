import React from 'react';
import {connect} from 'react-redux';

import {setCurrentFlashcard} from '../reducers/flashcards';

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

  let textToRender = !flashcards.length ? 'You currently have no flashcards left to practice' : 'Click below to begin your flashcard practice';

  return (
    <div>
      <h3>{textToRender}</h3>
      { flashcards.length > 0 &&
        <button onClick={() => setCurrentFlashcard(flashcards.shift())}>Next Flashcard</button>
      }
      { currentFlashcard.length > 0 &&
        <div>
          <span>{currentFlashcard}</span>
          <br />
          <button onClick={() => {
            speak(currentFlashcard);
          }}>Listen</button>
        </div>
      }
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Flashcard);
