import React, { Component } from 'react';
import './header.css';
import logo from './newlogo.png';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
    <div>

    <div className="headermenu">
      <nav>
        <ul>
        <li><h1>The Sports Journal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1></li>
        <li><a href="https://www.datadoghq.com/product/integrations/">Home</a></li>
        <li>News</li>
        <li>Debate</li>
        <li>Polls</li>
        <li>ABC</li>
        <li>Baseball</li>
        <li>Football</li>

        </ul>
      </nav>
    </div>


</div>
    );
  }
}


export default Header;
