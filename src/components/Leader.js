import React, { Component } from 'react';

export default class Leader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0,
      visibility: 'hidden',
      transition: 'opacity 0.2s ease-in-out, visibility 0.2s ease-in-out',
      arrow: 'fa fa-arrow-down',
      maxHeight: 0
    };
  }
  renderSpec = () => {
    return this.props.lead.specialization.map(spec => {
      return <li key={spec}>{spec}</li>;
    });
  };
  showMore = () => {
    if (this.state.arrow === 'fa fa-arrow-down') {
      this.setState({
        visibility: 'visible',
        opacity: 1,
        arrow: 'fa fa-arrow-up',
        transition: 'opacity 0.8s ease-in-out, visibility 0.8s ease-in-out',
        maxHeight: '100%'
      });
    } else {
      this.setState({
        opacity: 0,
        visibility: 'hidden',
        arrow: 'fa fa-arrow-down',
        transition: 'opacity 0.2s ease-in-out, visibility 0.2s ease-in-out',
        maxHeight: 0
      });
    }
  };
  render() {
    const {
      photo,
      name,
      profession,
      description,
      mail,
      phone
    } = this.props.lead;

    return (
      <article className="col-6 employee">
        <img src={photo} alt="leader" />
        <p className="name">{name}</p>
        <p className="lawyer">{profession}</p>
        <div
          className="desc-det"
          style={{
            transition: this.state.transition,
            opacity: this.state.opacity,
            visibility: this.state.visibility,
            maxHeight: this.state.maxHeight
          }}
        >
          <p>{description}</p>
          <ul>
            Specjalizacje:
            {this.renderSpec()}
          </ul>
          <p>Mail: {mail}</p>
          <p>Telefon: {phone}</p>
        </div>
        <i className={this.state.arrow} onClick={this.showMore} />
      </article>
    );
  }
}
