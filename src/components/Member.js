import React, { Component } from 'react';

export default class Member extends Component {
  render() {
    const { name, photo } = this.props.member;
    return (
      <article className="col-4 team">
        <img src={photo} alt="member" />
        <p>{name}</p>
      </article>
    );
  }
}
