// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router';

// == Import
import Homepage from 'src/components/HomePage';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Switch>
      <Route path="/" exact>
        <Homepage />
      </Route>
      <Route path="/categories/home" exact>
        <Homepage />
      </Route>
      <Route path="/categories/animals" exact>
        <Homepage />
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
        <Homepage />
      </Route>
      <Route path="logout" exact>
        <Homepage />
      </Route>
      <Route path="signin" exact>
        <Homepage />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
