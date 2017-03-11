//initial state of component
let initialState = {
  transcript: '',
};


//constants
const TOGGLE_TRANSCRIBER = 'TOGGLE_TRANSCRIBER';
const SUBMIT_TRANSCRIPT = 'SUBMIT_TRANSCRIPT';
const RESET_TRANSCRIPT = 'RESET_TRANSCRIPT';


//reducer
const transcriptionReducer = (prevState = initialState, action) => {
  let nextState = Object.assign({}, prevState);

  console.log('am I getting to reducer?');

  switch(action.type) {
    case SUBMIT_TRANSCRIPT:
      console.log('am I getting to submit transcript in reducer?')
      nextState.transcript = action.transcript;
      break;

    case RESET_TRANSCRIPT:
      nextState.transcript = '';
      break;

    default:
      return prevState;
  }
  console.log('Action dispatched: ', action.type, ' transcript: ', nextState.transcript);
  return nextState;
};


//action-creators
export const submitTranscript = (text) => ({
  type: SUBMIT_TRANSCRIPT,
  transcript: text,
});

export const resetTranscript = () => ({
  type: RESET_TRANSCRIPT
});


export default transcriptionReducer;
