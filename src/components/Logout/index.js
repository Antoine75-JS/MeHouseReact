import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const Logout = ({ submitLogout }) => {
  useEffect(() => {
    submitLogout();
  }, []);

  return (
    <Redirect to="/" />
  );
};

Logout.propTypes = {
  submitLogout: PropTypes.func,
};

Logout.defaultProps = {
  submitLogout: () => { },
};

export default Logout;