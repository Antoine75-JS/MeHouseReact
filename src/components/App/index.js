// == Import npm
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router';

/* Styles */
import './styles.css';

// Import from Containers
import CatDetails from 'src/containers/CatDetails';
import HomePage from 'src/containers/HomePage';
import LoginPage from 'src/containers/LoginPage';
import SignupPage from 'src/containers/SignupPage';
import OrgaHome from 'src/containers/OrgaHome';

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
const App = () => {
  const istrue = false;

  return (
    <div className="app">
      {/* <Header /> */}
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
  );
};

// == Export
export default App;
