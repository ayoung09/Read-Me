import axios from 'axios';

const initialState = {
  allTexts: [],
  currentText: {},
}

const RECEIVE_ALL_TEXTS = 'RECEIVE_ALL_TEXTS';
const RECEIVE_CURRENT_TEXT = 'RECEIVE_CURRENT_TEXT';


const originTextReducer = (prevState = initialState, action) => {
  const nextState = Object.assign({}, prevState);

  switch(action.type) {
    case RECEIVE_ALL_TEXTS:
      nextState.allTexts = action.texts;
      break;

    case RECEIVE_CURRENT_TEXT:
      nextState.currentText = action.text;
      break;

    default:
      return prevState;
  }
  return nextState;
};


//action-creators
export const receiveCurrentText = (text) => ({
  type: RECEIVE_CURRENT_TEXT,
  text,
});

export const receiveAllTexts = (texts) => ({
  type: RECEIVE_ALL_TEXTS,
  texts,
});

export const getTextById = textId => {
  return dispatch => {
    axios.get(`/api/texts/${textId}`)
      .then(response => {
        dispatch(receiveCurrentText(response.data));
      });
  };
};

export default originTextReducer;
