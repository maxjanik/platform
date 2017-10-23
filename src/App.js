import React, { Component } from 'react';
import './App.css';
import Header from './components/headercomponent/header';
import Footer from './components/footercomponent/footer';
import Homepage from './components/pages/homePage.js';
import Parent from './components/parent.js';
import Voting from './components/Voting.js';
import Leaderboard from './components/Leaderboard.js';
import pic1 from './Assets/patriots21.png';
import pic2 from './Assets/bradymontana.png';
import pic3 from './Assets/KD.png';
import Link from 'react-router-dom';


class App extends Component {
  render() {
    return (

    <div className="App">

    <Header />
    <div className="main-container">
      <div className="left-section">
      <img src={pic3} className="KD" alt="pic3" width="800px"/>
      <img src={pic1} className="Brady" alt="pic1" width="500px"/>
      <img src={pic2} className="pic2" alt="pic2" width="250px" />
      </div>

      <div className="right-section">
        <input type="text" placeholder="enter favorite player here"></input>
        <Voting />
        <Leaderboard />
      </div>

    </div>

    <Footer />
</div>


    );
  }
}


export default App;
