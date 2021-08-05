import api from 'src/api';

import {
  SIGNUP,
  SUBMIT_LOGIN,
  CHECK_LOGGED,
  loginUser,
} from 'src/actions/user';
import { openToast } from 'src/actions/toast';
import { startLoading, stopLoading } from 'src/actions/loading';

const signupMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // SIGNUP
    case SIGNUP: {
      store.dispatch(startLoading());
      api.post('/users/signup', {
        username: action.payload.username,
        email: action.payload.email.toLowerCase(),
        password: action.payload.password,
        repeat_password: action.payload.repeat_password,
      })
        .then((response) => {
          if (response.status === 201) {
            store.dispatch(openToast('Inscription prise en compte'));
            next(action);
          }
        })
        .catch((err) => {
          console.log(err);
          // Handle email if already exists
          if (err.response.status === 422) {
            console.log(err.response.data.message);
            store.dispatch(openToast(err.response.data.message));
          }
          else {
            store.dispatch(openToast('Une erreur est survenue'));
          }
        })
        .finally(() => {
          store.dispatch(stopLoading());
        });
      break;
    }
    // Check Logged
    case CHECK_LOGGED: {
      api.get('/checklogged')
        .then((response) => {
          console.log("Checklogged response", response);
          if (response.status === 200) {
            const payload = response.data.user;
            store.dispatch(loginUser(payload));
          }
        })
        .catch((err) => {
          console.trace(err);
        });
      return next(action);
    }
    // LOGIN
    case SUBMIT_LOGIN: {
      store.dispatch(startLoading());
      api.post('/login', {
        email: action.payload.email,
        password: action.payload.password,
        repeat_password: action.payload.repeat_password,
      })
        .then((response) => {
          if (response.status === 200) {
            store.dispatch(loginUser(response.data.user));
            store.dispatch(openToast('Vous êtes bien connecté'));
            next(action);
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 401) {
            console.trace(err.response.data.message);
            store.dispatch(openToast(err.response.data.message));
          }
          else {
            store.dispatch(openToast('Une erreur est survenue'));
          }
        })
        .finally(() => {
          store.dispatch(stopLoading());
        });
      break;
    }
    default: next(action);
  }
};

export default signupMiddleware;
