import React, { Component } from 'react';

import Navigation from './components/Navigation';
import Office from './components/Office';
import Leaders from './components/Leaders';
import Members from './components/Members';
import Offer from './components/Offer';
import Map from './components/Map';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <Office />
        <Leaders />
        <Members />
        <Offer />
        <Map />
        <Contact />
      </div>
    );
  }
}

export default App;
