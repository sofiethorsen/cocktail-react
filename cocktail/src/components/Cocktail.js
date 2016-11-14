import React, { Component } from 'react';
import { Link } from 'react-router';

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
          <p>{cocktail.name}</p>
        </figcaption>

      </figure>
    );
  }
}
export default Cocktail;