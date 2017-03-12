//initial state of component
let initialState = {
  transcript: '',
  comparison: '',
};


//constants
const TOGGLE_TRANSCRIBER = 'TOGGLE_TRANSCRIBER';
const SUBMIT_TRANSCRIPT = 'SUBMIT_TRANSCRIPT';
const WRITE_COMPARISON = 'WRITE_COMPARISON';


//reducer
const transcriptionReducer = (prevState = initialState, action) => {
  let nextState = Object.assign({}, prevState);

  switch(action.type) {
    case SUBMIT_TRANSCRIPT:

      nextState.transcript = action.transcript;
      break;

    case WRITE_COMPARISON:
      nextState.comparison = action.comparison;
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

export const writeComparison = (comparisonText) => ({
  type: WRITE_COMPARISON,
  comparison: comparisonText,
});


export default transcriptionReducer;
