import React from 'react';
import axios from 'axios';

const mapStateToProps = (state) => ({
  currentText: state.originText.currentText,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentText: (text) => dispatch(setCurrentText(text)),
});

const OriginText = ({ currentText, setCurrentText }) => {
  return (
    <div>
      <h4>{currentText.title}</h4>
      <span>{currentText.body}</span>
    </div>
  )
}

