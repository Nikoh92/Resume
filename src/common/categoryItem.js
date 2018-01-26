import React, { Component } from 'react';

class CategoryItem extends Component {

  render() {

    const selectedStyle = {
      borderRight: !this.props.isOnLeft ? "2px solid cornflowerblue" : "",
      borderLeft: this.props.isOnLeft ? "2px solid cornflowerblue" : "",
      marginLeft: this.props.isOnLeft ? "-2px" : "2px"
    };

    const selectedNameStyle = {
      color: "coral"
    };

    return (
      <div className="col-xs-12"
           id={this.props.isOnLeft ? "school" : "company"}
           onClick={() => this.props.descriptionDisplay(this.props.index)}
           style={this.props.description_id === this.props.index ? selectedStyle : null}>
        <div id="item-name" style={this.props.description_id === this.props.index ? selectedNameStyle : null}><b>{this.props.item.name}</b></div>
        <h3>{this.props.item.subtitle}</h3>
        <h4>{this.props.item.description}</h4>
        <h4>{this.props.item.year}</h4>
      </div>
    );
  }
}

export default CategoryItem;
