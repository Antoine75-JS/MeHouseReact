// == Import npm
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router';

/* API */
import api from 'src/api';

/* Styles */
import './styles.css';

// == Import from Components
import Homepage from 'src/components/HomePage';
import CatHouse from 'src/components/CatHouse';
import CatAnimals from 'src/components/CatAnimals';
import AnimalComponent from 'src/components/CatComponents/AnimalComponent';

// Import from Containers
import Header from 'src/containers/Header';
import LoginForm from 'src/containers/LoginForm';
import SignupPage from 'src/containers/SignupPage';

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
      <Header />
      <Switch>
        <Route path="/" exact>
          <Homepage />
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
          <Homepage />
        </Route>
        <Route path="/categories/bills" exact>
          <Homepage />
        </Route>
        <Route path="/categories/plants" exact>
          <Homepage />
        </Route>
        <Route path="/categories/events" exact>
          <Homepage />
        </Route>
        <Route path="/login" exact>
          <LoginForm />
        </Route>
        <Route path="/logout" exact>
          <Homepage />
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
