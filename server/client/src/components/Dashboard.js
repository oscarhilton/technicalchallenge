import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>
            Welcome back, {this.props.auth.current_user}.{' '}
          </h1>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashboard);
