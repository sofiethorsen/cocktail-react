import React, { Component } from 'react';

class RecipeIngredient extends Component {
  constructor() {
    super();

    this.hasComponent = this.hasComponent.bind(this);
  }

  hasComponent(component) {
    var has = false;

    for (const ingredient of this.props.inventory) {
      const name = ingredient.name.toLowerCase();
      const category = ingredient.category.toLowerCase();
      const componentName = component.toLowerCase();

      if (name === componentName || category === componentName) {
        has = true;
        break;
      }
    }

    return has;
  }

  render() {
    const component = this.props.component;
    const className = this.hasComponent(component) ? "component-span-has" : "component-span";
    return (
      <span className={className}>{component}</span>
    );
  }
}

export default RecipeIngredient;