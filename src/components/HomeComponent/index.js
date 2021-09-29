import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* Components */
import OrgasList from 'src/containers/OrgasList';

import './styles.scss';

const HomeComponent = ({ isLogged }) => (
  <div className="homepage">
    {isLogged ? (<OrgasList />) : (<Link to="/login">Connectez vous pour accéder à vos organizations</Link>)}
  </div>
);

HomeComponent.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default HomeComponent;
