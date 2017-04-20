import shuffle from 'shuffle-array';

const initialState = {
  flashcards: [],
  currentFlashcard: '',
  currentDefinition: {},
};

const SET_FLASHCARDS = 'SET_FLASHCARDS';
const SET_CURRENT_FLASHCARD = 'SET_CURRENT_FLASHCARD';
const SET_CURRENT_DEFINITION = 'SET_CURRENT_DEFINITION';
const CLEAR_DEFINITION = 'CLEAR_DEFINITION';

const flashcardsReducer = (prevState = initialState, action) => {
  const newState = Object.assign({}, prevState);

  switch (action.type) {
    case SET_FLASHCARDS:
      newState.flashcards = prevState.flashcards.concat(action.flashcards);
      break;

    case SET_CURRENT_FLASHCARD:
      newState.flashcards.push(prevState.currentFlashcard);
      newState.currentFlashcard = action.flashcard;
      break;

    case SET_CURRENT_DEFINITION:
      newState.currentDefinition = action.definitionObject;
      break;

    case CLEAR_DEFINITION:
      newState.currentDefinition = {};
      break;

    default:
      return prevState;
  }
  return newState;
};

export const setFlashcards = (flashcards) => ({
  type: SET_FLASHCARDS,
  flashcards: shuffle(flashcards),
});

export const setCurrentFlashcard = (flashcard) => ({
  type: SET_CURRENT_FLASHCARD,
  flashcard,
});

export const setCurrentDefinition = (definitionObject) => ({
  type: SET_CURRENT_DEFINITION,
  definitionObject,
});

export const clearDefinition = () => ({
  type: CLEAR_DEFINITION,
});

export default flashcardsReducer;
