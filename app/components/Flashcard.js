import React from 'react';
import {connect} from 'react-redux';

import FlashcardTranscription from './FlashcardTranscription';
import {setCurrentFlashcard, clearDefinition} from '../reducers/flashcards';

const mapStateToProps = state => ({
  flashcards: state.flashcards.flashcards,
  currentFlashcard: state.flashcards.currentFlashcard,
});

const mapDispatchToProps = dispatch => ({
  setCurrentFlashcard: (flashcard) => {
    dispatch(clearDefinition());
    dispatch(setCurrentFlashcard(flashcard));
  },
});



const Flashcard = ({ flashcards, currentFlashcard, setCurrentFlashcard }) => {

  let textToRender = !flashcards.length ? 'You currently have no flashcards left to practice' : 'Click below to begin your flashcard practice';

  return (
    <div className="container-fluid flashcard-container">
      <h3>{textToRender}</h3>
      { flashcards.length > 0 &&
        <button className="btn" onClick={() => setCurrentFlashcard(flashcards.shift())}>Next Flashcard</button>
      }
      { currentFlashcard.length > 0 &&
        <div className="row">
          <div className="flashcard">
            <div className="margTB5">{currentFlashcard}</div>
            <br />

            <FlashcardTranscription />
          </div>
        </div>
      }
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Flashcard);
