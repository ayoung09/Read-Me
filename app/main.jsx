'use strict';
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';
import axios from 'axios';

import store from './store';

import App from './components/App';
import Welcome from './components/Welcome';
import ReadText from './components/ReadText';
import Compare from './components/Compare';
import Flashcard from './components/Flashcard';

import { receiveAllTexts, getTextById } from './reducers/originText';
import { clearComparison, clearTranscript } from './reducers/transcription';


const onAppEnter = () => {
  axios.get('/api/texts')
    .then(response => store.dispatch(receiveAllTexts(response.data)));
};

const onReadTextEnter = (nextRouterState) => {
  const textId = nextRouterState.params.textId;
  store.dispatch(getTextById(textId));
  store.dispatch(clearTranscript());
};

const onCompareEnter = () => {
  store.dispatch(clearComparison());
}

render (
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={App} onEnter={onAppEnter}>
        <Route path="/welcome" component={Welcome} />
        <Route path="/readText/:textId" onEnter={onReadTextEnter} component={ReadText} />
        <Route path="/compare" component={Compare} onEnter={onCompareEnter} />
        <Route path="/flashcard" component={Flashcard} />
        <IndexRedirect to="/welcome" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
