import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import App from './components/Main';
import Welcome from './components/WelcomeComponent';
import List from './components/toDo/ListComponent';
import NoPage from './components/NoPageComponent';

// Render the main component into the dom
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Welcome}/>
      <Route path="list" component={List}/>
    </Route>
      <Route path="*" component={NoPage}/>
  </Router>
), document.getElementById('app'));
