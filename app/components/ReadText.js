import React from 'react';
import { connect } from 'react-redux';

import OriginText from './OriginText';
import Transcription from './Transcription';

const mapStateToProps = (state) => ({
  currentText: state.originText.currentText,
});

const ReadText = ({currentText}) => {

  return (
    <div>
      <OriginText currentText={currentText} />
      <Transcription />
    </div>
  )
}

export default connect(mapStateToProps)(ReadText);
