/* eslint-disable no-underscore-dangle */
import api from 'src/api';

import {
  SIGNUP,
  SUBMIT_LOGIN,
  SUBMIT_LOGOUT,
  CHECK_LOGGED,
  loginUser,
  setInvitationList,
} from 'src/actions/user';
import { openToast } from 'src/actions/toast';
import { startLoading, stopLoading } from 'src/actions/loading';

// Avoid lint weird error on no return...
// eslint-disable-next-line consistent-return
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
          store.dispatch(openToast(err.message));
          // Handle email if already exists
          if (err.response.status === 422) {
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
          if (response.status === 200) {
            const payload = response.data.user;
            store.dispatch(loginUser(payload));
          }
        })
        .catch((err) => {
          console.trace(err);
          store.dispatch(openToast("Vous n'êtes pas connecté"));
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

            // Check si user a des invits
            if (response.data.orgInvitationId) {
              const inviteList = [];
              const orgas = response.data.orgInvitationId;
              // Pour chaque orga
              orgas?.forEach((orga) => (
                inviteList.push(orga._id)
              ));
              store.dispatch(setInvitationList(inviteList));
            }
            next(action);
          }
        })
        .catch((err) => {
          store.dispatch(openToast(err.message));
          if (err.response.status === 401) {
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
    case SUBMIT_LOGOUT: {
      store.dispatch(stopLoading());
      api.post('/logout')
        .then((response) => {
          if (response.status === 200) {
            store.dispatch(openToast('Vous êtes bien déconnecté'));
          }
          return next(action);
        }).catch((err) => {
          store.dispatch(openToast(err.message));
        }).finally(() => store.dispatch(stopLoading()));
      break;
    }
    default: next(action);
  }
};

export default signupMiddleware;
