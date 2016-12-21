import React, { Component } from 'react';
import Cocktail from './Cocktail';
import Recipe from './Recipe';

class Single extends Component {
  render() {
    const index = this.props.suggestions.findIndex((cocktail) => cocktail[1].recipe_id === this.props.params.cocktailId);
    const cocktail = this.props.suggestions[index];
    const details = cocktail[1];
    const ingredients = details.ingredients;
    const description = details.description;

    return (
      <div className="single-photo">
        <Cocktail 
          {...this.props} 
          cocktail={cocktail} 
          />
        <Recipe ingredients={ingredients} description={description}>
        </Recipe>
      </div>
    );
  }
}
export default Single;