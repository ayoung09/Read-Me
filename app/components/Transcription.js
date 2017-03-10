import React from 'react';
import axios from 'axios';


const startConverting = () => {

  var r = document.getElementById('result');

  if (!'webkitSpeechRecognition' in window){
    upgrade();
  } else {
    var speechRecognizer = new webkitSpeechRecognition();
    speechRecognizer.continuous = true;
    speechRecognizer.interimResults = true;
    speechRecognizer.lang = 'en-IN';
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
      r.innerHTML = finalTranscripts + '<span style="color:#999">' + interimTranscripts + '</span>';
    };
    speechRecognizer.onerror = function (event) {
    };
  }
};

const Transcription = () => {
  console.log('Got to transcription component');
  return (
    <div>
      <h4 align="center">Read Me</h4>
        <div id="result"></div>
        <button onClick={() => startConverting()}><i className="fa fa-microphone"></i></button>
    </div>
  );
};

export default Transcription;
