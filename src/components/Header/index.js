import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { FiMenu, FiLogIn, FiLogOut } from 'react-icons/fi';

// Components & styles
import './styles.scss';

const Header = ({ username, isLogged, submitLogout }) => {
  const handleLogout = () => {
    submitLogout();
    console.log(isLogged);
  };

  return (
    <div className="header">
      <FiMenu color="white" />
      <Link to="/">
        <h1 className="header-title">MeHouse</h1>
      </Link>
      {isLogged && <h2>Welcome {username}</h2>}
      {isLogged ? (
        <FiLogOut onClick={handleLogout} color="white" />
      ) : (
        <Link to="/login">
          <FiLogIn color="white" />
        </Link>
      )}
    </div>
  );
};

Header.propTypes = {
  username: PropTypes.string,
  isLogged: PropTypes.bool,
  submitLogout: PropTypes.func.isRequired,
};

Header.defaultProps = {
  username: '',
  isLogged: false,
};

export default Header;
