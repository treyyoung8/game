import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Cup from './components/Cup'

class App extends Component {

  state = {
    normalCup: 'cups',
    bounceCup: 'cups',
    hiddenTiger: 'tiger'  }

  getBouncing = () => {
    var button = document.quer
    this.setState({bounceCup: 'cups bounce'})
    
  }


  render() {
    return (
      <div className="App">
      <div className="column">
        <div className="header">
          <Header />
        </div>
        <div className="row rowCups">
          <Cup cupStatus={this.state.normalCup} />
          <Cup cupStatus={this.state.bounceCup} />
          <Cup cupStatus={this.state.normalCup} />
          </div>
        <div>
          <button onClick={this.getBouncing} className="start">Start Game</button>
        </div>
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;