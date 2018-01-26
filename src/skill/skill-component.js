import React, { Component } from 'react';

import _ from 'lodash';

class SkillComponent extends Component {

  render() {

    const selectedStyle = {
      borderLeft: "2px solid cornflowerblue",
      paddingLeft: "7px"
    };

    return (
      <div className="col-xs-12 col-md-12 col-lg-12 div-skill">
        <div className="skill-type" onClick={() => this.props.descriptionDisplay(this.props.index)}><b style={this.props.hidden ? null : selectedStyle}>{this.props.title}</b></div>
        <div hidden={this.props.hidden}>
        {_.map(this.props.skilltype, (skill, index) => {
          return (
            <div className="col-xs-6 col-md-4 col-lg-4" key={index} id="skill-style">
              <i className={skill.image}/>
              <div>{skill.name}</div>
            </div>
          )
        })}
        </div>
      </div>
    );
  }
}

export default SkillComponent;