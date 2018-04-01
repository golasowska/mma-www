import React, { Component } from 'react';

import Navigation from './components/Navigation';
import Office from './components/Office';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <Office />
      </div>
    );
  }
}

export default App;
