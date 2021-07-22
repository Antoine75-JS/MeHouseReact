import React, { useState, useEffect } from 'react';
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
      <h1 className="header-title">MeHouse</h1>
      {isLogged ? <FiLogOut onClick={handleLogin} color="white" /> : <FiLogIn onClick={handleLogin} color="white" />}
    </div>
  );
};

export default Header;
