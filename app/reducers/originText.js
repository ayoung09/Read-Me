initialState = {
  currentText: {},
}

const SET_CURRENT_TEXT = 'SET_CURRENT_TEXT';

const originTextReducer = (prevState = initialState, action) => {
  const nextState = Object.assign({}, prevState);

  switch(action.type) {
    case SET_CURRENT_TEXT:
      nextState.currentText = action.text;
      break;

    default:
      return prevState;
  }
  return nextState;
};

export const setCurrentText = (text) => {
  type: SET_CURRENT_TEXT,
  text
};

export default originTextReducer;
