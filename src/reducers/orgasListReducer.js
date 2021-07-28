import {
  OPEN_MODAL,
  CLOSE_MODAL,
} from 'src/actions/modal';
import { SAVE_LIST_ORGAS } from 'src/actions/organizations';

export const initialState = {
  orgasList: [],
  isModalOpen: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_LIST_ORGAS:
      return {
        ...state,
        orgasList: action.organizations,
      };
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return state;
  }
};

export default reducer;
