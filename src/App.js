import React, { Component } from 'react';
import { configureAnchors }from 'react-scrollable-anchor'

import Header from './header/header.js';
import About from './about/about.js';
import Education from './education/education.js';
import Experience from './experience/experience.js';
import Skill from './skill/skill.js';
import Contact from './contact/contact.js';

import './App.css';

class App extends Component {

  componentWillMount() {
    configureAnchors({offset: -40});
  }

  render() {

    return (
      <div className="App">
        <div className="background-image-style" />
        <Header />
        <About/>
        <Education/>
        <Experience/>
        <Skill/>
        <Contact/>
      </div>
    );
  }
}

export default App;
