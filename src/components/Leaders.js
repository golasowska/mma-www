import React, { Component } from 'react';
import { connect } from 'react-redux';

import Leader from './Leader';

class Leaders extends Component {
  displayEmployee = () => {
    return this.props.employee.map(lead => {
      return <Leader key={lead.name} lead={lead} />;
    });
  };
  render() {
    return (
      <section id="zespol">
        <div className="row">
          <div className="col-10">
            <h3>ZESPÓŁ</h3>
          </div>
        </div>
        <div className="row">{this.displayEmployee()}</div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    employee: state.employee
  };
}

export default connect(mapStateToProps)(Leaders);
