import api from 'src/api';

import { CREATE_EVENT } from 'src/actions/events';

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
          console.log(response);
          if (response.status === 201) {
            store.dispatch(openToast('Event ajouté !'));
            store.dispatch(getOrgaDetails(action.orgaId));
            next(action);
          }
        })
        .catch((err) => console.trace(err))
        .finally(() => store.dispatch(stopLoading()));
      break;
    }
    default: next(action);
  }
};

export default eventsMiddleware;
