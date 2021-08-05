import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from 'src/store';

import MeHouse from 'src/containers/MeHouse';

const rootReactElement = (
  <Provider store={store}>
    <Router>
      <MeHouse />
    </Router>
  </Provider>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);
