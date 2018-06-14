import React, { Component } from 'react';
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor'

import SkillComponent from './skill-component.js';

class Skill extends Component {

  constructor(props) {
    super(props);

    this.state = {
      languages: [
        {
          name: "Bootstrap",
          image: "devicon-bootstrap-plain colored"
        },
        {
          name: "C++",
          image: "devicon-cplusplus-plain colored"
        },
        {
          name: "CSS3",
          image: "devicon-css3-plain colored"
        },
        {
          name: "HTML5",
          image: "devicon-html5-plain colored"
        },
        {
          name: "Java",
          image: "devicon-java-plain colored"
        },
        {
          name: "JavaScript",
          image: "devicon-javascript-plain colored"
        },
        {
          name: "Node JS",
          image: "devicon-nodejs-plain colored"
        },
        {
          name: "React JS",
          image: "devicon-react-original colored"
        },
        {
          name: "Angular",
          image: "devicon-angularjs-plain colored"
        },
        {
          name:"Webpack",
          image:"devicon-webpack-plain colored"
        }
      ],
      databases: [
        {
          name: "MongoDB",
          image: "devicon-mongodb-plain colored"
        },
        {
          name: "MySQL",
          image: "devicon-mysql-plain colored"
        },
        {
          name: "Oracle",
          image: "devicon-oracle-original colored"
        },
      ],
      tools: [
        {
          name: "Docker",
          image: "devicon-docker-plain colored"
        },
        {
          name: "Git",
          image: "devicon-git-plain colored"
        },
        {
          name: "Heroku",
          image: "devicon-heroku-original colored"
        },
        {
          name: "Trello",
          image: "devicon-trello-plain colored"
        },
        {
          name: "WordPress",
          image: "devicon-wordpress-plain"
        }
      ],
      platforms: [
        {
          name: "Android",
          image: "devicon-android-plain colored"
        },
        {
          name: "Ubuntu",
          image: "devicon-ubuntu-plain colored"
        },
        {
          name: "Windows",
          image: "devicon-windows8-original colored"
        },
      ],
      types: [
        {
          name: "Languages & Frameworks"
        },
        {
          name: "Databases"
        },
        {
          name: "Tools"
        },
        {
          name: "Platforms"
        },
      ],
      description_id: 0
    };

    this.descriptionDisplay = this.descriptionDisplay.bind(this);
  }

  descriptionDisplay(id) {

    if (id === this.state.description_id) {
      this.setState({description_id: -1});
      goToAnchor('skill');
    }
    else {
      this.setState({description_id: id});

      switch (id) {
        case 0:
          goToAnchor('languages');
          break;
        case 1:
          goToAnchor('databases');
          break;
        case 2:
          goToAnchor('tools');
          break;
        case 3:
          goToAnchor('platforms');
          break;
        default:
          break;
      }
    }

  }

  render() {

    return (
      <div className="App-left">
        <div className="container">
          <div className="row">
            <ScrollableAnchor id={'skill'}>
              <div>
                <div id="skills">Skills</div>
                <div className="col-xs-12 col-lg-12 col-md-12">
                  <ScrollableAnchor id={'languages'}>
                    <SkillComponent
                      description_id={this.state.description_id}
                      descriptionDisplay={this.descriptionDisplay}
                      hidden={this.state.description_id !== 0}
                      index={0}
                      skilltype={this.state.languages}
                      title={this.state.types[0].name} />
                  </ScrollableAnchor>
                  <ScrollableAnchor id={'databases'}>
                    <SkillComponent
                      description_id={this.state.description_id}
                      descriptionDisplay={this.descriptionDisplay}
                      hidden={this.state.description_id !== 1}
                      index={1}
                      skilltype={this.state.databases}
                      title={this.state.types[1].name} />
                  </ScrollableAnchor>
                  <ScrollableAnchor id={'tools'}>
                    <SkillComponent
                      description_id={this.state.description_id}
                      descriptionDisplay={this.descriptionDisplay}
                      hidden={this.state.description_id !== 2}
                      index={2}
                      skilltype={this.state.tools}
                      title={this.state.types[2].name} />
                  </ScrollableAnchor>
                  <ScrollableAnchor id={'platforms'}>
                    <SkillComponent
                      description_id={this.state.description_id}
                      descriptionDisplay={this.descriptionDisplay}
                      hidden={this.state.description_id !== 3}
                      index={3}
                      skilltype={this.state.platforms}
                      title={this.state.types[3].name} />
                  </ScrollableAnchor>
                </div>
              </div>
            </ScrollableAnchor>
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
