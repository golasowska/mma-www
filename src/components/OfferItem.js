import React, { Component } from 'react';

export default class OfferItem extends Component {
  displayElems = () => {
    return this.props.offerBox.elements.map(elem => {
      return (
        <li className="font-size-xs" key={elem}>
          {elem}
        </li>
      );
    });
  };
  render() {
    const { name, description } = this.props.offerBox;
    return (
      <div className="font-size-l boxes-bg square">
        {name}
        <div className="hidden">
          <div>{description}</div>
          <ul>{this.displayElems()}</ul>
        </div>
      </div>
    );
  }
}
