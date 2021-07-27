import { combineReducers } from 'redux';

// import userReducer from './user';
import toastReducer from './toastReducer';
import loadingReducer from './loadingReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  toast: toastReducer,
  loading: loadingReducer,
});

export default rootReducer;
