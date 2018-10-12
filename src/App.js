import React, { Component } from 'react';
import './App.css';
// import Cups from './components/Cups';
import Header from './components/Header';
import cup from './assets/cup.png'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <div className="row">
      <img src={cup}></img>
      <img src={cup}></img>
      <img src={cup}></img>
      </div>
      </div>
    );
  }
}

export default App;
