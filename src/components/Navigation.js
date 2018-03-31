import React, { Component } from 'react';

import logo from '../assets/images/mmalogo.png';

class Navigation extends Component {
  render() {
    return (
      <div className="container header">
        <div className="row">
          <div className="col-4">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <i className="fa fa-bars fa-3x" aria-hidden="true" />
          <nav className="col-8 navigation">
            <ul>
              <li>
                <a href="#kancelaria">Kancelaria</a>
              </li>
              <li>
                <a href="#zespol">Zespół</a>
              </li>
              <li>
                <a href="#oferta">Oferta</a>
              </li>
              <li>
                <a href="#kontakt">Kontakt</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navigation;
