import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import { submitTranscript, resetTranscript } from '../reducers/transcription';

const mapStateToProps = (state) => ({
  transcript: state.transcription.transcript,
});

const mapDispatchToProps = (dispatch) => ({
  submitTranscript: (text) => {
    dispatch(submitTranscript(text));
    browserHistory.push('/compare');
  },
});


const startStopConverting = (onOrOff) => {

  var r = document.getElementById('result');
  console.log('this is on or off: ', onOrOff);


    if (!'webkitSpeechRecognition' in window){
      upgrade();
    } else {
      var speechRecognizer = new webkitSpeechRecognition();
      speechRecognizer.continuous = true;
      speechRecognizer.interimResults = true;
      speechRecognizer.lang = 'en-IN';
    }

    if (!onOrOff) {
      console.log('got to off', onOrOff);
      speechRecognizer.stop();
      return;

    } else if (onOrOff) {
      speechRecognizer.start();

      var finalTranscripts = '';

      speechRecognizer.onresult = function(event){
        var interimTranscripts = '';
        for(var i = event.resultIndex; i < event.results.length; i++){
          var transcript = event.results[i][0].transcript;
          transcript.replace("\n", "<br>");
          if(event.results[i].isFinal){
            finalTranscripts += transcript;
          }else{
            interimTranscripts += transcript;
          }
        }
        r.innerHTML = finalTranscripts + interimTranscripts;
      };
      speechRecognizer.onerror = function (event) {
      };
  }
};

const Transcription = ({transcription, submitTranscript}) => {

  let transcriberOn = false;

  return (
    <div className="row transciption-container pad20">
      <h5 className="transcription-line">Click on the microphone and begin reading</h5>
        <button className="btn btn-start" onClick={() => {
          transcriberOn = !transcriberOn;
          startStopConverting(transcriberOn);
        }}>
          <i className="fa fa-microphone"></i>
        </button>
        <button className="btn btn-submit" onClick={() => {
          let finalTranscript = document.getElementById('result').innerHTML;
          submitTranscript(finalTranscript);
        }}>Submit</button>
        <div id="result"></div>
    </div>
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(Transcription);
