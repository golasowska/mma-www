import React, { Component } from 'react';

import logo from '../assets/images/mmalogo.png';

class Navigation extends Component {
  burgerToggle = () => {
    let linksEl = document.querySelector('.narrowLinks');
    if (linksEl.style.display === 'block') {
      linksEl.style.display = 'none';
    } else {
      linksEl.style.display = 'block';
    }
  };
  render() {
    return (
      <div className="container header">
        <div className="row">
          <div className="col-4">
            <img className="logo" src={logo} alt="logo" />
          </div>

          <nav className="col-8">
            <div className="navWide">
              <div className="wideDiv">
                <a href="#kancelaria">Kancelaria</a>
                <a href="#zespol">Zespół</a>
                <a href="#oferta">Oferta</a>
                <a href="#kontakt">Kontakt</a>
              </div>
            </div>

            <div className="navNarrow">
              <i
                className="fa fa-bars fa-3x"
                aria-hidden="true"
                onClick={this.burgerToggle}
              />
              <div className="narrowLinks">
                <a href="kancelaria" onClick={this.burgerToggle}>
                  Kancelaria
                </a>
                <a href="zespol" onClick={this.burgerToggle}>
                  Zespół
                </a>
                <a href="oferta" onClick={this.burgerToggle}>
                  Oferta
                </a>
                <a href="kontakt" onClick={this.burgerToggle}>
                  Kontakt
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navigation;
