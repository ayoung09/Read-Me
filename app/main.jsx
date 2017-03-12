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

import { receiveAllTexts, getTextById } from './reducers/originText';


const onAppEnter = () => {
  axios.get('/api/texts')
    .then(response => store.dispatch(receiveAllTexts(response.data)));
};

const onReadTextEnter = (nextRouterState) => {
  const textId = nextRouterState.params.textId;
  store.dispatch(getTextById(textId));
};

render (
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={App} onEnter={onAppEnter}>
        <Route path="/welcome" component={Welcome} />
        <Route path="/readText/:textId" onEnter={onReadTextEnter} component={ReadText} />
        <IndexRedirect to="/welcome" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
