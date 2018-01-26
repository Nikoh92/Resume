import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

import _ from 'lodash';

import CategoryItem from '../common/categoryItem.js';
import Infotel from '../assets/infotel.png';
import Klesia from '../assets/klesia.png';
import PSA from '../assets/psa.png';
import Procapital from '../assets/procapital.png';

class Experience extends Component {

  constructor(props) {
    super(props);

    this.state = {
      companies: [
        {
          name: "INFOTEL",
          subtitle:
           "Société de Service en Ingénierie Informatique",
          description: "Full-Stack Web Developpeur",
          year: "Oct. '14 ",
          img:Infotel,
          details:` est une société de service en Informatique`,
          task: `En tant que développeur Full-Stack, j'ai pu mettre à profit mes connaissances chez divers client.
          J'ai pu monter en compétences sur différentes technologies afin d'assurer, qualité de code, bonne gestion de projet dans chaque mission qui m'a été confiée.`
        },
        {
          name: "KLESIA",
          subtitle: "Groupe paritaire de protection sociale",
          description: "Full-Stack Web Developpeur",
          year: "Janv '15 - Mars '16",
          img:Klesia,
          details:`est un groupe de protection sociale. La société est issu de la fusion entre le groupe Mornay et D&O.`,
          task:``
        },
        {
          name: "PSA",
          subtitle: "Constructeur automobile",
          description: "Full-Stack Web Developpeur",
          year: "Mars '16 - Sept '16",
          img:PSA,
          details:`est un constructeur automobile Français.`,
          task:``
        },
        {
          name: "PROCAPITAL",
          subtitle: "Prestataires de services titres",
          description: "Full-Stack Web Developpeur",
          year: "Sept '16 - Fev '18",
          img:Procapital,
          details:`filiale du Crédit Mutuel Arkéa, elle offre une large gamme de services à destination d’établissements financiers : sociétés de gestion, banques privées, réseaux bancaires, courtiers et banques en ligne ou assureurs.`,
          task:``
        }
      ],
      description_id: 0,
      currentItem: null
    };

    this.descriptionDisplay = this.descriptionDisplay.bind(this);
    
  }
  componentWillMount(){
    this.descriptionDisplay(0);
  }
  descriptionDisplay(id) {
    const currentItem = this.state.companies[id];
    this.setState({description_id: id});
    this.setState({currentItem: currentItem})
  }

  render() {

    return (
      <div className="App-right">
        <div className="container">
          <div className="row">
            <ScrollableAnchor id={'experience'}>
              <div>
                <div id="experience-style">Experience</div>
                <div className="col-xs-12 col-lg-6 col-md-6 col-lg-push-6 col-md-push-6">
                  {_.map(this.state.companies, (company, index) => {
                    
                    return (<CategoryItem key={index} isOnLeft={false} item={company} index={index} description_id={this.state.description_id} descriptionDisplay={this.descriptionDisplay} />)
                  })}
                </div>
                <div className="col-xs-12 col-lg-6 col-md-6 col-lg-pull-6 col-md-pull-6 description">
                  <div>
                    <img alt="Infotel" id="image" src={this.state.currentItem.img} />
                    <br/>
                    <div id="description-text">
                      <b>{this.state.currentItem.name} {this.state.currentItem.details}</b>
                      <br/>
                      <br/>
                      <i>{this.state.currentItem.task}</i>
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

export default Experience;