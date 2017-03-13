import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  transcription: require('./transcription').default,
  originText: require('./originText').default,
  flashcards: require('./flashcards').default,
});

export default rootReducer;
