import { SIGNUP } from 'src/actions/user';

export const initialState = {
  isSigned: false,
  isLogged: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        isSigned: true,
      };
    default:
      return state;
  }
};

export default reducer;
