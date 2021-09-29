import {
  SIGNUP,
  LOGIN_USER,
  SUBMIT_LOGOUT,
  SET_INVITATION_LIST,
  UPDATE_USER_ORGAS,
  UPDATE_USER_INVITES,
} from 'src/actions/user';

export const initialState = {
  isSigned: false,
  isLogged: false,
  userId: null,
  username: null,
  userOrgas: [],
  hasInvitesInOrgas: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        isSigned: true,
      };
    case LOGIN_USER:
      console.log('LOGIN ACTION', action.payload);
      return {
        ...state,
        isLogged: true,
        userId: action.payload._id,
        username: action.payload.username,
        userOrgas: action.payload.organizations,
        hasInvitesInOrgas: action.payload.isInvitedTo,
      };
    case UPDATE_USER_ORGAS:
      console.log('REDUCER UPDATE USER', action);
      return {
        ...state,
        userOrgas: action.payload.organizations,
      };
    case UPDATE_USER_INVITES:
      console.log('USER INVITES:', action);
      return {
        ...state,
        hasInvitesInOrgas: action.payload.isInvitedTo,
      };
    case SUBMIT_LOGOUT:
      return {
        ...state,
        isLogged: false,
      };
    case SET_INVITATION_LIST:
      return {
        ...state,
        hasInvitesInOrgas: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
