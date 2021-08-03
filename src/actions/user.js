// Actions types
export const SIGNUP = 'SIGNUP';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_LOGOUT = 'SUBMIT_LOGOUT';
export const LOGIN_USER = 'LOGIN';

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
