import React from 'react';

import './styles.scss';

const MenuComponent = ({ isMenuOpen }) => {
  const isEmpty = true;

  return (
    <div className={isMenuOpen ? ('menuComponent open') : ('menuComponent closed')}>
      <h1>New Component</h1>

    </div>
  );
};

export default MenuComponent;
