import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  FiMenu,
  FiLogIn,
  FiPlus,
  FiLogOut,
} from 'react-icons/fi';

// Components & styles
import './styles.scss';

const Header = ({
  isLogged,
  openMenu,
  closeMenu,
  isMenuOpen,
  hasInvitesInOrgas,
}) => {
  const handleOpenMenu = () => {
    openMenu();
  };

  const handleCloseMenu = () => {
    closeMenu();
  };

  return (
    <div className="header">
      {isMenuOpen ? (
        <FiPlus color="white" onClick={handleCloseMenu} className="header-menuClose" />
      ) : (
        <div className="header-menu">
          <FiMenu color="white" onClick={handleOpenMenu} />
          {(hasInvitesInOrgas?.length > 0 && isLogged) && <span className="header-menu--notifications" />}
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
  openMenu: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool,
  hasInvitesInOrgas: PropTypes.array,
};

Header.defaultProps = {
  isLogged: false,
  isMenuOpen: false,
  hasInvitesInOrgas: [],
};

export default Header;
