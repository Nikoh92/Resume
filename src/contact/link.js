import React, { Component } from 'react';

class Link extends Component {

  render() {
    return (
      <div className="col-xs-12 col-lg-6 col-md-6">
        <a href={this.props.link.link} target="_blank" rel="noopener noreferrer">
          <img alt={this.props.link.name} src={this.props.link.image} className="links"/>
        </a>
        <div>{this.props.link.name}</div>
      </div>
    );
  }
}

export default Link;