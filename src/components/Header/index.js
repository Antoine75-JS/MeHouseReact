import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiLogIn, FiLogOut } from 'react-icons/fi';

import './styles.scss';

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    console.log(isLogged);
  }, [isLogged]);

  const handleLogin = () => {
    setIsLogged(!isLogged);
  };

  return (
    <div className="header">
      <FiMenu color="white" />
      <Link to="/">
        <h1 className="header-title">MeHouse</h1>
      </Link>
      {isLogged ? (
        <FiLogOut onClick={handleLogin} color="white" />
      ) : (
        <Link to="/login">
          <FiLogIn onClick={handleLogin} color="white" />
        </Link>
      )}
    </div>
  );
};

export default Header;
