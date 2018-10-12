import React, { Component } from 'react';
import './App.css';
// import Cups from './components/Cups';
import Header from './components/Header';
import cup from './assets/cup.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="row rowCups">
          <img className="cups" src={cup}></img>
          <img className="cups bounce" src={cup}></img>
          <img className="cups" src={cup}></img>
        </div>
      </div>
    );
  }
}

export default App;
