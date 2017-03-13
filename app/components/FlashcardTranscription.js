import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import store from '../store';

import { setCurrentDefinition } from '../reducers/flashcards';


const mapStateToProps = state => ({
  currentFlashcard: state.flashcards.currentFlashcard,
  currentDefinition: state.flashcards.currentDefinition,
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


const config = {
  headers: {"X-Mashape-Authorization": "NguKc9ItBYmshgM0gmIWPLKlR5Yop1S6q6KjsnUSPhPk4WdF93"}
};


const defineWord = (word) => {
  return axios.get(`https://wordsapiv1.p.mashape.com/words/${word}`, config)
    .then(response => {
      console.log('response from axios: ', response);
      store.dispatch(setCurrentDefinition(response.data.results[0])
      );
    });
};


const FlashcardTranscription = ({currentFlashcard, currentDefinition}) => {

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
        <button className="btn"
          onClick={() => {
            console.log(defineWord(currentFlashcard));
          }}>Definition</button>
      <div id="result-flashcard"></div>
      {Object.keys(currentDefinition).length > 0 &&
        <div>
          <span>Part of speech: {currentDefinition.partOfSpeech}</span>
          <br />
          <span>Definition: {currentDefinition.definition}</span>
        </div>
      }
    </div>
  );
};


export default connect(mapStateToProps)(FlashcardTranscription);
