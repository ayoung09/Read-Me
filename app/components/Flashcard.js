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

const Flashcard = ({ flashcards, currentFlashcard, setCurrentFlashcard }) => {
  return (
    <div>

    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Flashcard);
