import api from 'src/api';

import { openToast } from 'src/actions/toast';
import { redirectTo } from 'src/actions/utils';
import { GET_ORGA_DETAILS, setOrgaDetails, getOrgaDetails } from 'src/actions/organizations';
import { startLoading, stopLoading } from 'src/actions/loading';
import { CREATE_CATEGORY, DELETE_CATEGORY } from 'src/actions/categories';

const orgasMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
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
