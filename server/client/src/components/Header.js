import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-faded">
        <a className="navbar-brand" href="/">
          Exam App
        </a>
      </nav>
    );
  }
}

export default Header;
