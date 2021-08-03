import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import LoginForm from 'src/components/LoginForm';

const LoginPage = ({ isLogged, isSigned }) => {
  console.log(isLogged, isSigned);

  if (isSigned) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="">
      <div className="signup">
        <h1 className="signup-title">Connectez-vous</h1>
        <LoginForm />
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  isLogged: PropTypes.bool,
  isSigned: PropTypes.bool,
};

LoginPage.defaultProps = {
  isLogged: false,
  isSigned: false,
};

export default LoginPage;
