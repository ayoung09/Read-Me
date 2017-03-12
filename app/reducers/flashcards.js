const initialState = {
  flashcards: [],
  currentFlashcard: '',
};

const SET_FLASHCARDS = 'SET_FLASHCARDS';
const SET_CURRENT_FLASHCARD = 'SET_CURRENT_FLASHCARD';


const flashcardsReducer = (prevState = initialState, action) => {
  const newState = Object.assign({}, prevState);

  switch (action.type) {
    case SET_FLASHCARDS:
      newState.flashcards = action.flashcards;
      break;

    case SET_CURRENT_FLASHCARD:
      newState.currentFlashcard = action.flashcard;
      break;

    default:
      return prevState;
  }
  return newState;
};

export const setFlashcards = (flashcards) => ({
  type: SET_FLASHCARDS,
  flashcards,
});

export const setCurrentFlashcard = (flashcard) => ({
  type: SET_CURRENT_FLASHCARD,
  flashcard,
});

export default flashcardsReducer;
