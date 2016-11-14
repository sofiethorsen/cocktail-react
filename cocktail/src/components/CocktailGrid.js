import React, { Component } from 'react';
import Cocktail from './Cocktail';

class CocktailGrid extends Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.cocktails.map(
          (cocktail, index) => 
            <Cocktail 
              {...this.props} 
              key={index}
              cocktail={cocktail}
            />)}
      </div>
    );
  }
}

export default CocktailGrid;