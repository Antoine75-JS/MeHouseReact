/* eslint-disable no-underscore-dangle */
import { DELETE_TASK, CREATE_TASK, RESET_TASK } from 'src/actions/tasks';

export const initialState = {
  // catTasks: [],
  // catId: null,
  // catName: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DELETE_TASK:
      return {
        ...state,
      };
    case RESET_TASK:
      return {
        ...state,
      };
    case CREATE_TASK:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
