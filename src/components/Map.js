/*global google*/
import React, { Component } from 'react';

export default class Map extends Component {
  componentDidMount = () => {
    const uluru = { lat: 50.067805, lng: 19.965802 };
    const map = new google.maps.Map(this.refs.map, {
      zoom: 17,
      center: uluru
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  };
  render() {
    return (
      <div className="row map">
        <div className="col-10">
          <div ref="map" id="map" />
        </div>
      </div>
    );
  }
}
