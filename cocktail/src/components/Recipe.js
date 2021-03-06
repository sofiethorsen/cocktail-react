import React, { Component } from 'react';

class Recipe extends Component {
  render() {
    return (
      <div className="recipe">
        <ul className="list-of-ingredients">
          {this.props.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
        </ul>
        <div className="description">
          {this.props.description}
        </div>
      </div>
    );
  }
}

export default Recipe;