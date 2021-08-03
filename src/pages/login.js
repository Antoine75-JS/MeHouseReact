import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import LoginForm from 'src/containers/LoginForm';
import Header from 'src/containers/Header';

const LoginPage = ({ isLogged }) => {
  if (isLogged) {
    return <Redirect to="/" />;
  }

  return (
    <div className="">
      <Header />
      <div className="signup">
        <h1 className="signup-title">Connectez-vous</h1>
        <LoginForm />
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  isLogged: PropTypes.bool,
};

LoginPage.defaultProps = {
  isLogged: false,
};

export default LoginPage;
