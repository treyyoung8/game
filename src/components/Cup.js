import React, { Component } from 'react';
import cup from '../assets/cup.png'
import tiger from '../assets/tiger.jpg'

class Cup extends Component {


  render() {
    return (
        <div>
          <img className={this.props.cupStatus} src={cup}></img>
          <img className="tiger" src={tiger}></img>
        </div>
    );
  }
}

export default Cup;
