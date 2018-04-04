import React, { Component } from 'react';
import { connect } from 'react-redux';

import Member from './Member';

class Members extends Component {
  displayMembers = () => {
    return this.props.members.map(member => {
      return <Member key={member.name} member={member} />;
    });
  };
  render() {
    return (
      <div>
        <div className="row members">
          <div className="row-display">
            <div className="col-10">
              <h3>PRACOWNICY</h3>
            </div>
          </div>
        </div>
        <div className="row members">{this.displayMembers()}</div>
        <div className="row members">
          <div className="row-display">
            <div className="col-10">
              <p>REKRUTACJA</p>
              <p>
                Osoby zainteresowane dołączeniem do zespołu Kancelarii
                Miechowska Markiewicz Adwokaci zapraszamy do przesyłania
                dokumentów aplikacyjnych (CV wraz z listem motywacyjnym) na
                adres e-mail:
              </p>
              <p>biuro@mmadwokaci.com</p>
              <p>
                <em>
                  Informujemy, że skontaktujemy się tylko z wybranymi osobami, a
                  Państwa dane osobowe będą przetwarzane przez Kancelarię
                  Miechowska Markiewicz Adwokaci jedynie w celach
                  rekrutacyjnych. Podanie danych jest więc dobrowolne, lecz
                  niezbędne do wzięcia udziału w procesie rekrutacji.
                  Przysługuje Państwu prawo dostępu do treści danych i prawo ich
                  poprawiania.
                </em>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    members: state.members
  };
}

export default connect(mapStateToProps)(Members);
