import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  transcription: require('./transcription').default,
  originText: require('./originText').default,
});

export default rootReducer;
