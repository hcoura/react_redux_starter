import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import SearchContainer from './components/github/search/SearchContainer';

export default(
  <App>
    <Route exact path="/" component={SearchContainer} />
  </App>
);
