import React, { Component } from 'react';
import Cups from './components/Cups'; 
import Header from './components/Header'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Cups />
      </div>
    );
  }
}

export default App;
