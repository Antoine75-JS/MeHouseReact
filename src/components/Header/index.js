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
    <Link to="/">
      <div className="header">
        <FiMenu color="white" />
        <h1 className="header-title">MeHouse</h1>
        {isLogged ? <FiLogOut onClick={handleLogin} color="white" /> : <FiLogIn onClick={handleLogin} color="white" />}
      </div>
    </Link>
  );
};

export default Header;
