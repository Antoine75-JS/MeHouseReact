import {
  SAVE_LIST_ORGAS,
} from 'src/actions/organizations';

export const initialState = {
  orgasList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_LIST_ORGAS:
      return {
        ...state,
        orgasList: action.organizations,
      };
    default:
      return state;
  }
};

export default reducer;
