//initial state of component
let initialState = {
  transcript: '',
  comparison: '',
};


//constants
const SUBMIT_TRANSCRIPT = 'SUBMIT_TRANSCRIPT';
const CLEAR_TRANSCRIPT = 'CLEAR_TRANSCRIPT';
const WRITE_COMPARISON = 'WRITE_COMPARISON';
const CLEAR_COMPARISON = 'CLEAR_COMPARISON';


//reducer
const transcriptionReducer = (prevState = initialState, action) => {
  let nextState = Object.assign({}, prevState);

  switch(action.type) {
    case SUBMIT_TRANSCRIPT:
      nextState.transcript = action.transcript;
      break;

    case CLEAR_TRANSCRIPT:
      nextState.transcript = '';
      break;

    case WRITE_COMPARISON:
      nextState.comparison = action.comparison;
      break;

    case CLEAR_COMPARISON:
      nextState.comparison = '';
      break;

    default:
      return prevState;
  }

  return nextState;
};


//action-creators
export const submitTranscript = (text) => ({
  type: SUBMIT_TRANSCRIPT,
  transcript: text,
});

export const clearTranscript = () => ({
  type: CLEAR_TRANSCRIPT,
});

export const writeComparison = (comparisonText) => ({
  type: WRITE_COMPARISON,
  comparison: comparisonText,
});

export const clearComparison = () => ({
  type: CLEAR_COMPARISON,
});

export default transcriptionReducer;
