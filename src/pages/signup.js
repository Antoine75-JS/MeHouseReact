import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import SignupForm from 'src/containers/SignupForm';

const SignupPage = ({ isLogged, isSigned }) => {
  console.log(isLogged, isSigned);

  if (isSigned) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="">
      <div className="signup">
        <h1 className="signup-title">Créer un compte</h1>
        <SignupForm />
      </div>
    </div>
  );
};

SignupPage.propTypes = {
  isLogged: PropTypes.bool,
  isSigned: PropTypes.bool,
};

SignupPage.defaultProps = {
  isLogged: false,
  isSigned: false,
};

export default SignupPage;
