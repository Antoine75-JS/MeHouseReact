// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';

/* Styles */
import './styles.scss';

// Import from Containers
import CatDetails from 'src/containers/CatDetails';
import HomePage from 'src/containers/HomePage';
import LoginPage from 'src/containers/LoginPage';
import SignupPage from 'src/containers/SignupPage';
import OrgaHome from 'src/containers/OrgaHome';
import MenuComponent from 'src/containers/Menu';

/* Create pictograms library */
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCat,
  faDog,
  faFish,
  faPaw,
} from '@fortawesome/free-solid-svg-icons';

library.add(faCat, faDog, faFish, faPaw);

// == Composant
const MeHouse = ({ checkLogged }) => {
  // Check if user is logged
  useEffect(() => {
    checkLogged();
  }, []);

  return (
    <div className="app">
      <MenuComponent />
      <div className="app-content">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/orgas/:id" exact>
            <OrgaHome />
          </Route>
          <Route path="/orgas/cat/:id" exact>
            <CatDetails />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/logout" exact>
            <HomePage />
          </Route>
          <Route path="/signup" exact>
            <SignupPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

MeHouse.propTypes = {
  checkLogged: PropTypes.func.isRequired,
};

// == Export
export default MeHouse;
