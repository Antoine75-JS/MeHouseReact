import React from 'react';

/* Components */
import OrgasList from 'src/containers/OrgasList';

import './styles.scss';

const HomeComponent = () => {
  const isEmpty = true;

  return (
    <div className="homepage">
      <OrgasList />
    </div>
  );
};

export default HomeComponent;
