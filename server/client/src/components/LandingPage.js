import React from 'react';
import LoginForm from './LoginForm';

var LandingPage = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Welcome</h1>
        <p>Please log in</p>
      </div>
      <LoginForm />
    </div>
  );
};

export default LandingPage;
