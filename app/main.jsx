'use strict';
import React from 'react';
import {Router, Route, IndexRedirect} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';

//import Transcription from './components/Transcription'; //come back to this later

render (
  <Router history={browserHistory}>
    <Route path="/" />
    <IndexRedirect to="/" />
  </Router>,
  document.getElementById('main')
);
