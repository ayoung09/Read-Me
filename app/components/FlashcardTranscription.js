import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  currentFlashcard: state.flashcards.currentFlashcard,
});


const speak = (str) => {
  let message = new SpeechSynthesisUtterance(str);
  window.speechSynthesis.speak(message);
};


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

const FlashcardTranscription = ({currentFlashcard}) => {

  let transcriberOn = false;

  return (
    <div>
        <button className="btn btn-listen" onClick={() => {
              speak(currentFlashcard);
            }}>Listen</button>
        <button className="btn btn-flash-transcription" onClick={() => {
          transcriberOn = !transcriberOn;
          startStopConverting(transcriberOn);
        }}>
          <i className="fa fa-microphone"></i>
        </button>
      <div id="result-flashcard"></div>
    </div>
  );
};


export default connect(mapStateToProps)(FlashcardTranscription);
