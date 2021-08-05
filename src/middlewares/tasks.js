import api from 'src/api';

import {
  CREATE_TASK,
  DELETE_TASK,
  GET_CATEGORY_TASKS,
  setCatTasks,
} from 'src/actions/tasks';
import { openToast } from 'src/actions/toast';
import { closeModal } from 'src/actions/modal';
import { startLoading, stopLoading } from 'src/actions/loading';
import { getCatTasks } from '../actions/tasks';

const tasksMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_CATEGORY_TASKS: {
      store.dispatch(startLoading());
      api.get(`/categories/${action.catId}`)
        .then((response) => {
          console.log(response);
          if (response.status === 200 && response.data.catTasks.length > 0) {
            store.dispatch(setCatTasks(response.data));
            next(action);
          }
          else {
            store.dispatch(setCatTasks(response.data));
            store.dispatch(openToast('Aucune tâche trouvée'));
          }
          next(action);
        })
        .catch((err) => console.trace(err))
        .finally(() => {
          store.dispatch(stopLoading());
        });
      break;
    }
    case CREATE_TASK: {
      store.dispatch(startLoading());
      console.log('Creating task');
      api.post(`/tasks/${action.orgaId}`, {
        taskName: action.payload.taskName,
        repeat: action.payload.taskRepeat,
        repeatFrequency: action.payload.repeatFrequency,
        catId: action.catId,
      })
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            console.log(response.data);
            store.dispatch(openToast('Tâche ajoutée à l\'organisation'));
            store.dispatch(getCatTasks(response.data.updatedCategory._id));
            store.dispatch(closeModal());
            next(action);
          }
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(openToast('Une erreur est survenue'));
        })
        .finally(() => {
          store.dispatch(stopLoading());
        });
      break;
    }
    case DELETE_TASK: {
      store.dispatch(startLoading());
      api.delete(`/tasks/${action.taskId}`)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            store.dispatch(openToast('Tâche supprimée'));
            store.dispatch(getCatTasks(action.catId));
            next(action);
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

export default tasksMiddleware;
