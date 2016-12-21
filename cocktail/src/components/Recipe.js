import React, { Component } from 'react';

class Recipe extends Component {
  render() {
    return (
      <div className="recipe">
        <ul className="list-of-ingredients">
          {Object.keys(this.props.ingredients).map((ingredient, index) => 
            <li key={index}>{this.props.ingredients[ingredient]} {ingredient}</li>)}
        </ul>
        <div className="description">
          {this.props.description}
        </div>
      </div>
    );
  }
}

export default Recipe;