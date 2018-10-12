import React, { Component } from 'react';
import cup from '../assets/cup.png'



class Cup extends Component {





  render() {
    return (
          
        <img className={this.props.cupStatus} src={cup}></img>


    );
  }
}

export default Cup;
