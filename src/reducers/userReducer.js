import { SIGNUP, LOGIN_USER, SUBMIT_LOGOUT } from 'src/actions/user';

export const initialState = {
  isSigned: false,
  isLogged: false,
  userId: null,
  username: null,
  userOrgas: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        isSigned: true,
      };
    case LOGIN_USER:
      return {
        ...state,
        isLogged: true,
        userId: action.payload.id,
        username: action.payload.username,
        userOrgas: action.payload.organizations,
      };
    case SUBMIT_LOGOUT:
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
};

export default reducer;
