import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

import _ from 'lodash';

import CategoryItem from '../common/categoryItem.js';
import Link from './link.js';

import Linkedin from '../assets/linkedin.png';
import Github from '../assets/github.png';
import Facebook from '../assets/facebook.png';
import Pdf from '../assets/pdf.png';

import Resume from '../assets/cv_hn.pdf';

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          name: "Information"
        },
        {
          name: "Links"
        }
      ],
      links: [
        {
          name: "LinkedIn",
          image: Linkedin,
          link: "https://www.linkedin.com/in/nicolas-helie-10b27066/"
        },
        {
          name: "Github",
          image: Github,
          link: "https://github.com/Nikoh92"
        },
        {
          name: "Facebook",
          image: Facebook,
          link: "https://www.facebook.com/nicolas.helie.9"
        },
        {
          name: "Resume",
          image: Pdf,
          link: Resume
        },
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
      <div className="App-right">
        <div className="container">
          <div className="row">
            <ScrollableAnchor id={'contact'}>
              <div>
                <div id="experience-style">Contact</div>
                <div className="col-xs-12 col-lg-6 col-md-6 col-lg-push-6 col-md-push-6">
                  {_.map(this.state.items, (item, index) => {
                    return (<CategoryItem key={index} isOnLeft={false} item={item} index={index} description_id={this.state.description_id} descriptionDisplay={this.descriptionDisplay} />)
                  })}
                </div>
                <div className="col-xs-12 col-lg-6 col-md-6 col-lg-pull-6 col-md-pull-6 description">
                  <div hidden={this.state.description_id} id="description-text">
                    <div className="hidiho">Email</div>
                    <a href="mailto:helie.nicolas@gmail.com">helie.nicolas@gmail.com</a>
                    <br/>
                    <div className="hidiho">Phone number</div>
                    <a href="tel:+33622433212">+33 6 15 11 83 90</a>
                    <br/>
                    <div className="hidiho">Address</div>
                    <div>5 allée Henri Sellier</div>
                    <div>92800 Puteaux</div>
                    <div>FRANCE</div>
                    <br/>
                  </div>
                  <div hidden={!this.state.description_id}>
                    <div className="hidiho">Liens!</div>
                    <br/>
                    <div className="col-xs-12 col-md-12 col-lg-12" id="skill">
                      {_.map(this.state.links, (link, index) => {
                        return (
                          <Link link={link} key={index} />
                        )
                      })}
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

export default Contact;
