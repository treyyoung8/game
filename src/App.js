import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Cup from './components/Cup'

class App extends Component {




  state = {
    normalCup: 'cups',
    bounceCup: 'cups'
  }

  getBouncing = () => {
    this.setState({bounceCup: 'cups bounce'})
  }


  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default App;