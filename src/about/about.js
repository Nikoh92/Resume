import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

import Nico from '../assets/nico.jpg';

class About extends Component {

  render() {
    return (
      <ScrollableAnchor id={'about'}>
        <div className="App-about">
          <div className="centered">
            <img alt="Mederic" src={Nico} className="img-circle profile-picture" />
            <div className="me"><b>Nicolas HELIE</b> !</div>
            <h4>Developpeur Front-End React </h4>
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default About;
