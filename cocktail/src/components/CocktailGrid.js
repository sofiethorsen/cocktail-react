import React, { Component } from 'react';
import Cocktail from './Cocktail';
import Search from './Search';

class CocktailGrid extends Component {
  render() {
    return (
      <div>
        <Search {...this.props} />
        <div className="photo-grid">
          {this.props.suggestions.map(
            (cocktail, index) => 
              <Cocktail 
                {...this.props} 
                key={index}
                cocktail={cocktail}
              />)}
        </div>
      </div>
    );
  }
}

export default CocktailGrid;