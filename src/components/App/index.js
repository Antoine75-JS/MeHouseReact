// == Import npm
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router';

/* API */
import api from 'src/api';

/* Styles */
import './styles.css';

// == Import from Components
import CatHouse from 'src/components/CatHouse';
import CatAnimals from 'src/components/CatAnimals';
import AnimalComponent from 'src/components/CatComponents/AnimalComponent';

// Import from Containers
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
        <Route path="/categories/house" exact>
          <CatHouse />
        </Route>
        <Route path="/categories/animals" exact>
          <CatAnimals />
        </Route>
        <Route path="/categories/animals/:id" exact>
          <AnimalComponent />
        </Route>
        <Route path="/categories/shopping" exact>
          <HomePage />
        </Route>
        <Route path="/categories/bills" exact>
          <HomePage />
        </Route>
        <Route path="/categories/plants" exact>
          <HomePage />
        </Route>
        <Route path="/categories/events" exact>
          <HomePage />
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
