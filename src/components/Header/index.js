import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiMenu, FiLogIn, FiPlus, FiLogOut } from 'react-icons/fi';

// Components & styles
import './styles.scss';

const Header = ({ isLogged, openMenu, closeMenu, isMenuOpen, hasInvitesInOrgas }) => {
  console.log(hasInvitesInOrgas);

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
        <div className="header-menu">
          <FiMenu color="white" onClick={handleOpenMenu} />
          {hasInvitesInOrgas?.length > 0 && <span className="header-menu--notifications" />}
        </div>
      )}
      <Link to="/">
        <h1 className="header-title">MeHouse</h1>
      </Link>
      {isLogged ? (
        <Link to="/logout">
          <FiLogOut color="white" className="header-logout" />
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
