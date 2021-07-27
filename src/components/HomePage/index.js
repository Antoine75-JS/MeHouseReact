import React from 'react';

/* Components */
import OrgasListComponent from 'src/components/OrgasListComponent';

import './styles.scss';

const Homepage = () => {
  const isEmpty = true;

  return (
    <div className="homepage">
      <OrgasListComponent />
    </div>
  );
};

export default Homepage;
