import api from 'src/api';

import { CREATE_ORGA } from 'src/actions/organizations';
import { openToast } from 'src/actions/toast';
import { startLoading, stopLoading } from 'src/actions/loading';

const orgasMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // case LOAD_ORGAS: {
    //   store.dispatch(startLoading());
    //   console.log('ok middleware');
    //   api.get('/orgas/organizations')
    //     .then((response) => {
    //       console.log(response);
    //       if (response.status === 200) {
    //         store.dispatch(saveListOrgas(response.data));
    //         openToast('Organisation créée !');
    //         next(action);
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       store.dispatch(openToast('Une erreur est survenue'));
    //     })
    //     .finally(() => {
    //       store.dispatch(stopLoading());
    //     });
    //   break;
    // }
    default: next(action);
  }
};

export default orgasMiddleware;
