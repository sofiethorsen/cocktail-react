import React, { Component } from 'react';
import { Link } from 'react-router';
import RecipeIngredient from './RecipeIngredient';

class Cocktail extends Component {

  render() {
    const { cocktail } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/cocktail/${cocktail.id}`}>
            <img className="grid-photo" src={cocktail.display_src} alt={cocktail.name} />
          </Link>
        </div>

        <figcaption>
          <div className="cocktail-info">
            <p>{cocktail.name}</p>
          </div>
          {cocktail.components.map((component, index) => 
            <RecipeIngredient
              key={index}
              component={component}
              inventory={this.props.inventory}
            />
          )}
        </figcaption>

      </figure>
    );
  }
}
export default Cocktail;