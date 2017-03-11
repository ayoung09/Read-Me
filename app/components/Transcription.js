import React, {Component} from 'react';
import {connect} from 'react-redux';

import { submitTranscript, resetTranscript } from '../reducers/transcription';

const mapStateToProps = (state) => ({
  transcript: state.transcription.transcript,
});

const mapDispatchToProps = (dispatch) => ({
  submitTranscript: (text) => dispatch(submitTranscript(text)),
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

  if (onOrOff) {
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
  } else if (!onOrOff) {
    speechRecognizer.stop();
    return;
  }
};

const Transcription = ({transcription, submitTranscript}) => {

  let transcriberOn = false;
  return (
    <div>
      <h4>Read Me</h4>
        <div id="result"></div>
          <button onClick={() => {
            transcriberOn = !transcriberOn;
            startStopConverting(transcriberOn);
          }}>
            <i className="fa fa-microphone"></i>
          </button>
        <div>
          <button onClick={() => {
            let finalTranscript = document.getElementById('result').innerHTML;
            submitTranscript(finalTranscript);
          }}>Submit</button>
        </div>
    </div>
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(Transcription);
