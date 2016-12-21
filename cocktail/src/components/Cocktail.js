import React, { Component } from 'react';
import { Link } from 'react-router';

class Cocktail extends Component {

  render() {
    const { cocktail } = this.props;
    const name = cocktail[0];
    const details = cocktail[1];
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/cocktail/${details.recipe_id}`}>
            <img className="grid-photo" src={details.display_src} alt={name} />
          </Link>
        </div>

        <figcaption>
          <div className="cocktail-info">
            <p>{name}</p>
          </div>
          {details.matches.map((component) => 
            <span key={component} className="component-span-has">
              {component}
            </span>
          )}
          {details.nonMatches.map((component) => 
            <span key={component} className="component-span">
              {component}
            </span>
          )}
        </figcaption>

      </figure>
    );
  }
}
export default Cocktail;