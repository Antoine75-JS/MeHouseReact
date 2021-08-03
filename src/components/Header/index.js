import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiLogIn, FiLogOut } from 'react-icons/fi';

// Components & styles
import Toast from 'src/containers/Toast';
import './styles.scss';

const Header = ({ username, isLogged, submitLogout }) => {
  console.log(username, isLogged);
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

export default Header;
