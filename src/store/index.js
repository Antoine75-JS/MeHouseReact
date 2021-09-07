import { createStore, applyMiddleware, compose } from 'redux';

// Import middlewares
import authMiddleWare from 'src/middlewares/auth';
import orgasMiddleware from 'src/middlewares/organizations';
import tasksMiddleware from 'src/middlewares/tasks';
import shoppingMiddleware from 'src/middlewares/shopping';
import eventsMiddleware from 'src/middlewares/events';

// Import reducers
import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(authMiddleWare, orgasMiddleware, tasksMiddleware, shoppingMiddleware, eventsMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
