import { GET_ORGA_DETAILS, SET_ORGA_DETAILS } from 'src/actions/organizations';

export const initialState = {
  orgCategories: [],
  orgTasks: [],
  orgaId: null,
  orgUsers: [],
  orgName: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ORGA_DETAILS:
      return {
        ...state,
        orgaId: action.payload.id,
      };
    case SET_ORGA_DETAILS:
      return {
        ...state,
        orgCategories: action.payload.orgCategories,
        orgName: action.payload.orgName,
        orgUsers: action.payload.orgUsers,
      };
    default:
      return state;
  }
};

export default reducer;
