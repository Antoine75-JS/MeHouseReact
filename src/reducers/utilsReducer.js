import {
  REDIRECT_TO,
  RESET_REDIRECT_URL,
} from 'src/actions/utils';

export const initialState = {
  redirectUrl: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REDIRECT_TO:
      return {
        ...state,
        redirectUrl: action.url,
      };
    case RESET_REDIRECT_URL:
      return {
        ...state,
        redirectUrl: '',
      };
    default:
      return state;
  }
};

export default reducer;
