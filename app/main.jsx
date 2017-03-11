'use strict';
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';
import axios from 'axios';

import store from './store'
import Transcription from './components/Transcription'; //come back to this later

const onAppEnter = () => {
  console.log('got to app!!!')
}

render (
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" onEnter={onAppEnter} component={Transcription} />
      <IndexRedirect to="/" />
    </Router>
  </Provider>,
  document.getElementById('main')
);
