import React, { Component } from 'react';
import Cocktail from './Cocktail';
import Recipe from './Recipe';

class Single extends Component {
  render() {
    const index = this.props.cocktails.findIndex((cocktail) => cocktail.id === this.props.params.cocktailId);
    const cocktail = this.props.cocktails[index];
    const ingredients = cocktail.ingredients;
    const description = cocktail.description;

    return (
      <div className="single-photo">
        <Cocktail cocktail={cocktail} />
        <Recipe ingredients={ingredients} description={description}>
        </Recipe>
      </div>
    );
  }
}
export default Single;