/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import {Router} from 'react-router';
import {createBrowserHistory} from 'history';
import configureStore from './store/configureStore';
import routes from './routes';
import './static/styles/global.module.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
);
