import api from 'src/api';

import { openToast } from 'src/actions/toast';
import { GET_ORGA_DETAILS, setOrgaDetails } from 'src/actions/organizations';
import { startLoading, stopLoading } from 'src/actions/loading';

const orgasMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ORGA_DETAILS: {
      store.dispatch(startLoading());
      api.get(`/orgas/${action.orgId}`)
        .then((response) => {
          // console.log('Orgafound:', response);
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
    default: next(action);
  }
};

export default orgasMiddleware;
