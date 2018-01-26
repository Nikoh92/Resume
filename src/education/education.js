import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

import _ from 'lodash';

import CategoryItem from '../common/categoryItem.js';

import Evry from '../assets/evry.jpg';

class Education extends Component {

  constructor(props) {
    super(props);

    this.state = {
      schools: [
        {
          name: "Université d'Evry",
          subtitle: "Master génie des systèmes industriels",
          description: "Automatisme & informatique",
          year: "2011-2014"
        }
      ],
      description_id: 0
    };

    this.descriptionDisplay = this.descriptionDisplay.bind(this);
  }

  descriptionDisplay(id) {
    this.setState({description_id: id});
  }

  render() {

    return (
      <div className="App-left">
        <div className="container">
          <div className="row">
            <ScrollableAnchor id={'education'}>
              <div>
                <div id="education-style">Education</div>
                <div className="col-xs-12 col-lg-6 col-md-6">
                  {_.map(this.state.schools, (school, index) => {
                    return (<CategoryItem key={index} isOnLeft={true} item={school} index={index} description_id={this.state.description_id} descriptionDisplay={this.descriptionDisplay} />)
                  })}
                </div>
                <div className="col-xs-12 col-lg-6 col-md-6 description">
                  <div hidden={this.state.description_id}>
                    <img alt="Evry" id="image" src={Evry} className="img-circle"/>
                    <br/>
                    <div id="description-text">
                      <b>L'université d'Evry</b> est un établissement pluridisciplinaire, engagé dans la professionnalisation, reconnu pour la qualité de ses formations et de sa recherche.
                      <br/>
                      <br/>
                      Je suis spécialisé dans le <b>développement Mobile et Web</b>. J'ai appris à construire des applications <b>rapide</b>, <b>responsive</b> au travers d'un process de déploiement continue.
                    </div>
                  </div>
                </div>
              </div>
            </ScrollableAnchor>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;