import React from 'react';
import ReactDOM from 'react-dom';
import { createHashHistory } from 'history';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import routes from './routes.jsx';

const history = createHashHistory();

ReactDOM.render(
  <Router history={history} location={history.location} navigator={history}>
    {routes()}
  </Router>,
  document.getElementById('app')
);