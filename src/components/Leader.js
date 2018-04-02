import React, { Component } from 'react';

export default class Leader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
      arrow: 'fa fa-arrow-down'
    };
  }
  renderSpec = () => {
    return this.props.lead.specialization.map(spec => {
      return <li key={spec}>{spec}</li>;
    });
  };
  showMore = () => {
    if (this.state.display === 'none') {
      this.setState({
        display: 'block',
        arrow: 'fa fa-arrow-up'
      });
    } else {
      this.setState({
        display: 'none',
        arrow: 'fa fa-arrow-down'
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
      <article className="col-5 employee">
        <img src={photo} alt="leader" />
        <p className="name">{name}</p>
        <p className="lawyer">{profession}</p>
        <div className="desc-det" style={{ display: this.state.display }}>
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
