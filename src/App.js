import React, { Component } from 'react';

import Navigation from './components/Navigation';
import Office from './components/Office';
import Leaders from './components/Leaders';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <Office />
        <Leaders />
      </div>
    );
  }
}

export default App;
