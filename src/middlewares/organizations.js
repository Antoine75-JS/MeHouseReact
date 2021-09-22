import api from 'src/api';

import { openToast } from 'src/actions/toast';
import { redirectTo } from 'src/actions/utils';
import { CREATE_ORGA, GET_ORGA_DETAILS, INVITE_USER_TO_ORGA, JOIN_ORGA_FROM_INVITE, setOrgaDetails, getOrgaDetails } from 'src/actions/organizations';
import { startLoading, stopLoading } from 'src/actions/loading';
import { updateUserOrgas } from 'src/actions/user';
import { CREATE_CATEGORY, DELETE_CATEGORY } from 'src/actions/categories';
import { closeModal } from 'src/actions/modal';

const orgasMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_ORGA: {
      store.dispatch(startLoading());
      api.post(`/orgas/${action.userId}`, {
        orgName: action.payload.orgName,
      })
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            store.dispatch(closeModal());
            store.dispatch(openToast('Organisation créee !'));
            store.dispatch(updateUserOrgas(response.data.userWithOrgas._id, response.data.userWithOrgas));
          }
        })
        .catch((err) => {
          console.trace(err);
          store.dispatch(openToast('Une erreur est survenue'));
        })
        .finally(() => {
          store.dispatch(stopLoading());
        });
      break;
    }
    case INVITE_USER_TO_ORGA: {
      console.log(action);
      store.dispatch(startLoading());
      api.post(`/invite/${action.orgaId}`, {
        inviteEmail: action.payload.invitedUserEmail,
        inviteName: action.payload.invitedUserName,
        orgaName: action.orgaName,
        userName: action.userName,
        orgaId: action.orgaId,
      })
        .then((response) => {
          // If success
          if (response.status === 200) {
            // Dispatch update user & orga
            store.dispatch(closeModal());
            store.dispatch(openToast('User added to organization'));
          }
          // If user is already invited to organization
          else if (response.status === 202) {
            console.log('User already invited');
            store.dispatch(openToast(response.data.message));
          }
        })
        .catch((err) => {
          store.dispatch(openToast('Une erreur est survenue'));
          console.log(err);
        })
        .finally(() => {
          // Dispatch stopLoading
          store.dispatch(stopLoading());
        });
      break;
    }
    case JOIN_ORGA_FROM_INVITE: {
      console.log(action);
      store.dispatch(startLoading());
      api.patch(`/users/${action.userId}/${action.orgaId}/add`, {
        organizations: action.orgaId,
      })
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            // Add redirect to orga
            // Dispatch message
            store.dispatch(openToast('Bienvenue !'));
          }
        })
        .catch((err) => {
          // If user already joined
          if (err.response.status === 409) {
            store.dispatch(openToast('User already in Organization'));
          }
          // If user isnt invited
          if (err.response.status === 403) {
            store.dispatch(openToast('Vous n\'êtes pas invité à cette organisation'));
          }
        })
        .finally(() => {
          store.dispatch(stopLoading());
        });
      break;
    }
    case GET_ORGA_DETAILS: {
      store.dispatch(startLoading());
      api.get(`/orgas/${action.orgId}`)
        .then((response) => {
          if (response.status === 200) {
            store.dispatch(setOrgaDetails(response.data));
            next(action);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          store.dispatch(stopLoading());
        });
      break;
    }
    case CREATE_CATEGORY: {
      console.log('creating category', action.payload, action.orgaId);
      store.dispatch(startLoading());
      api.post(`/categories/${action.orgaId}`, {
        catName: action.payload.categoryName,
      }).then((response) => {
        console.log(response);
        if (response.status === 201) {
          store.dispatch(openToast('Catégorie ajoutée'));
          store.dispatch(getOrgaDetails(action.orgaId));
          next();
        }
      })
        .catch((err) => {
          console.trace(err);
        })
        .finally(() => {
          store.dispatch(stopLoading());
        });
      break;
    }
    case DELETE_CATEGORY: {
      store.dispatch(startLoading());
      api.delete(`/categories/${action.catId}`)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            console.log('supprimé', response.data);
            store.dispatch(openToast('Catégorie supprimée'));
            // setOrgaDetails(response.updatedOrga);
            next(
              redirectTo(`orgas/${response.data.updatedOrga._id}`),
            );
          }
        })
        .catch((err) => {
          console.trace(err);
          store.dispatch(openToast('Une erreur est survenue'));
        })
        .finally(() => {
          store.dispatch(stopLoading());
        });
      break;
    }
    default: next(action);
  }
};

export default orgasMiddleware;
