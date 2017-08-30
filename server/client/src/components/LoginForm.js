import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userLoginRequest } from '../actions/loginActions';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {},
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({ isLoading: true });
    this.props.userLoginRequest(this.state);
  }
  render() {
    const { errors, username, password, isLoading } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="form-horizontal" role="form">
        <div className="form-group">
          <label className="col-sm-3 control-label">Username</label>
          <div className="col-sm-9">
            <input
              value={username}
              onChange={this.onChange}
              name="username"
              type="text"
              id="firstName"
              placeholder="Username"
              className="form-control"
              autofocus
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label">Password</label>
          <div className="col-sm-9">
            <input
              value={password}
              onChange={this.onChange}
              name="password"
              type="password"
              id="password"
              placeholder="Password"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-9 col-sm-offset-3">
            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={isLoading}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  userLoginRequest: React.PropTypes.func.isRequired
};

export default connect(null, { userLoginRequest })(LoginForm);
