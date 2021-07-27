import api from 'src/api';

import { SIGNUP } from 'src/actions/user';
import { openToast } from 'src/actions/toast';
import { startLoading, stopLoading } from 'src/actions/loading';

const signupMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SIGNUP: {
      store.dispatch(startLoading());
      api.post('/users/', {
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
    default: next(action);
  }
};

export default signupMiddleware;
