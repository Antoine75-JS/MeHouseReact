import api from 'src/api';

import { CREATE_EVENT, DELETE_EVENT } from 'src/actions/events';

// To refresh orga after edit
import { getOrgaDetails } from 'src/actions/organizations';

// Utils
import { openToast } from 'src/actions/toast';
import { startLoading, stopLoading } from 'src/actions/loading';

const eventsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_EVENT: {
      // console.log(action.payload, action.eventDate, action.orgaId);
      store.dispatch(startLoading());
      api.post(`/events/${action.orgaId}`, {
        eventName: action.payload.eventName,
        eventDate: action.eventDate,
      })
        .then((response) => {
          if (response.status === 201) {
            store.dispatch(openToast('Event ajouté !'));
            store.dispatch(getOrgaDetails(action.orgaId));
            next(action);
          }
        })
        .catch((err) => store.dispatch(err.message))
        .finally(() => store.dispatch(stopLoading()));
      break;
    }
    case DELETE_EVENT: {
      store.dispatch(startLoading());
      api.delete(`/events/${action.eventId}`)
        .then((response) => {
          if (response.status === 200) {
            store.dispatch(openToast('Item supprimé'));
            store.dispatch(getOrgaDetails(response.data.orgaId));
            next();
          }
        })
        .catch((err) => {
          store.dispatch(err.message);
        })
        .finally(() => {
          store.dispatch(stopLoading());
        });
      break;
    }
    default: next(action);
  }
};

export default eventsMiddleware;
