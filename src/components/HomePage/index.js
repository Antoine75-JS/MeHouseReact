import React from 'react';

/* Components */
import CategoriesList from 'src/components/CategoriesList';

import './styles.scss';

const Homepage = () => {
  const isEmpty = true;

  return (
    <div className="homepage">
      <CategoriesList />
    </div>
  );
};

export default Homepage;
