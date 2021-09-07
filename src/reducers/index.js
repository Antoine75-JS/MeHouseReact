import { combineReducers } from 'redux';

// import userReducer from './user';
import toastReducer from './toastReducer';
import loadingReducer from './loadingReducer';
import userReducer from './userReducer';
import modalReducer from './modalReducer';
import orgasListReducer from './orgasListReducer';
import organizationReducer from './organizationsReducer';
import tasksReducer from './tasksReducer';
import menuReducer from './menuReducer';
import shoppingReducer from './shoppingReducer';
import sliderReducer from './sliderReducer';
import eventsReducer from './eventsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  toast: toastReducer,
  loading: loadingReducer,
  modal: modalReducer,
  orgasList: orgasListReducer,
  organizations: organizationReducer,
  tasks: tasksReducer,
  menu: menuReducer,
  shopping: shoppingReducer,
  slider: sliderReducer,
  events: eventsReducer,
});

export default rootReducer;
