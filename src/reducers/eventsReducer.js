import {
  CREATE_EVENT,
  DELETE_EVENT,
} from 'src/actions/events';

export const initialState = {
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_EVENT:
      return {
        ...state,
      };
    case DELETE_EVENT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
