import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiMenu, FiLogIn, FiUser, FiPlus } from 'react-icons/fi';

// Components & styles
import './styles.scss';

const Header = ({ isLogged, submitLogout, openMenu, closeMenu, isMenuOpen }) => {
  const handleLogout = () => {
    submitLogout();
    console.log(isLogged);
  };

  const handleOpenMenu = () => {
    openMenu();
    console.log('menu state: ', isMenuOpen);
  };

  const handleCloseMenu = () => {
    closeMenu();
    console.log('menu state: ', isMenuOpen);
  };

  return (
    <div className="header">
      {isMenuOpen ? (
        <FiPlus color="white" onClick={handleCloseMenu} className="header-menuClose" />
      ) : (
        <FiMenu color="white" onClick={handleOpenMenu} className="header-menu" />
      )}
      <Link to="/">
        <h1 className="header-title">MeHouse</h1>
      </Link>
      {isLogged ? (
        <Link to="/profile">
          <FiUser onClick={handleLogout} color="white" className="header-logout" />
        </Link>
      ) : (
        <Link to="/login">
          <FiLogIn color="white" className="header-login" />
        </Link>
      )}
    </div>
  );
};

Header.propTypes = {
  isLogged: PropTypes.bool,
  submitLogout: PropTypes.func.isRequired,
};

Header.defaultProps = {
  isLogged: false,
};

export default Header;
