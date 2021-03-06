// Actions types
export const SIGNUP = 'SIGNUP';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_LOGOUT = 'SUBMIT_LOGOUT';
export const LOGIN_USER = 'LOGIN';
export const CHECK_LOGGED = 'CHECK_LOGGED';
export const SET_INVITATION_LIST = 'SET_INVITATION_LIST';
export const UPDATE_USER_ORGAS = 'UPDATE_USER_ORGAS';
export const UPDATE_USER_INVITES = 'UPDATE_USER_INVITES';

export const updateUserInvites = (userId, payload) => ({
  type: UPDATE_USER_INVITES,
  userId,
  payload,
});

export const updateUserOrgas = (userId, payload) => ({
  type: UPDATE_USER_ORGAS,
  userId,
  payload,
});

export const setInvitationList = (payload) => ({
  type: SET_INVITATION_LIST,
  payload,
});

export const checkLogged = () => ({
  type: CHECK_LOGGED,
});

// Action creator
export const signupNewUser = (payload, errMessage) => ({
  type: SIGNUP,
  payload,
  errMessage,
});

export const submitLogin = (payload, errMessage) => ({
  type: SUBMIT_LOGIN,
  payload,
  errMessage,
});

export const submitLogout = () => ({
  type: SUBMIT_LOGOUT,
});

export const loginUser = (payload) => ({
  type: LOGIN_USER,
  payload,
});
