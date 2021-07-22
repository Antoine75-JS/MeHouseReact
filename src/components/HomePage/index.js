import React from 'react';

/* Components */
import Header from 'src/components/Header';
import CategoriesList from 'src/components/CategoriesList';

import './styles.scss';

const Homepage = () => {
  const isEmpty = true;

  return (
    <div className="homepage">
      <Header />
      <CategoriesList />
    </div>
  );
};

export default Homepage;
