// Actions types
export const SIGNUP = 'SIGNUP';

// Action creator
export const signupNewUser = (payload, errMessage) => ({
  type: SIGNUP,
  payload,
  errMessage,
});
