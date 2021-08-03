import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import SignupForm from 'src/containers/SignupForm';
import Header from 'src/containers/Header';

const SignupPage = ({ isSigned }) => {
  if (isSigned) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="">
      <Header />
      <div className="signup">
        <h1 className="signup-title">Créer un compte</h1>
        <SignupForm />
      </div>
    </div>
  );
};

SignupPage.propTypes = {
  isSigned: PropTypes.bool,
};

SignupPage.defaultProps = {
  isSigned: false,
};

export default SignupPage;
