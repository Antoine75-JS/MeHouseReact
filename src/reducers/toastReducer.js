import {
  OPEN_TOAST,
  CLOSE_TOAST,
} from 'src/actions/toast';

export const initialState = {
  open: false,
  message: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_TOAST:
      return {
        ...state,
        open: true,
        message: action.message,
      };
    case CLOSE_TOAST:
      return {
        ...state,
        open: false,
        message: '',
      };
    default:
      return state;
  }
};

export default reducer;
