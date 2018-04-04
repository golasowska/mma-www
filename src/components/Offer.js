import React, { Component } from 'react';
import { connect } from 'react-redux';
import OfferItem from './OfferItem';

class Offer extends Component {
  displayOffer = () => {
    return this.props.offer.map(offerBox => {
      return <OfferItem key={offerBox.name} offerBox={offerBox} />;
    });
  };
  render() {
    return (
      <section id="oferta">
        <div className="row">
          <div className="col-10">
            <h3>OFERTA</h3>
          </div>
        </div>
        <div className="elements">{this.displayOffer()}</div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    offer: state.offer
  };
}

export default connect(mapStateToProps)(Offer);
