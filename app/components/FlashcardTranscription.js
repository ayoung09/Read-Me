import React, {Component} from 'react';

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

const FlashcardTranscription = (props) => {

  let transcriberOn = false;

  return (
    <div>
        <button onClick={() => {
          transcriberOn = !transcriberOn;
          startStopConverting(transcriberOn);
        }}>
          <i className="fa fa-microphone"></i>
        </button>
      <div id="result"></div>
    </div>
  );
};


export default FlashcardTranscription;
