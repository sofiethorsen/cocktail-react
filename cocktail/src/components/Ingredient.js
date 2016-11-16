import React, { Component } from 'react';

class Ingredient extends Component {
  constructor() {
    super();

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    const { name, category } = this.props;
    this.props.addToInventory(name, category);
    this.props.clearSearch();
  }

  render() {
    return (
      <li 
        className="ingredient-list"
        ref="selected"
        onClick={(e) => this.handleSelect(e)}>
          {this.props.name}, {this.props.category}
      </li>
    );
  }
}

export default Ingredient;