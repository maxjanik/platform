import React from 'react';
import ReactDOM from 'react-dom';
import Leaderboard from './components/Leaderboard.js';
import './index.css';
import App from './App';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/home' component={Leaderboard} />
    </div>
  </BrowserRouter>,


document.getElementById('root'));
