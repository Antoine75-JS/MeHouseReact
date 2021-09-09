import {
  REDIRECT_TO,
} from 'src/actions/utils';

export const initialState = {
  redirectUrl: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REDIRECT_TO:
      console.log(action.url);
      return {
        ...state,
        redirectUrl: action.url,
      };
    default:
      return state;
  }
};

export default reducer;
