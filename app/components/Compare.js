import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  transcript: state.transcription.transcript,
});

const Compare = ({ transcript }) => {
  console.log('This is transcript: ', transcript);
  return (
    <div>

    </div>
  );
};

export default connect(mapStateToProps)(Compare);
