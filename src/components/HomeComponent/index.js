import React from 'react';
import { Link } from 'react-router-dom';

/* Components */
import OrgasList from 'src/containers/OrgasList';

import './styles.scss';

const HomeComponent = ({ isLogged }) => {
  const isEmpty = true;

  return (
    <div className="homepage">
      {isLogged ? (<OrgasList />) : (<Link to="/login">Connectez vous pour accéder à vos organizations</Link>)}
    </div>
  );
};

export default HomeComponent;
