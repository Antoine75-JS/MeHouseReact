import {
  OPEN_MENU,
  CLOSE_MENU,
} from 'src/actions/menu';

export const initialState = {
  isMenuOpen: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MENU:
      return {
        ...state,
        isMenuOpen: true,
      };
    case CLOSE_MENU:
      return {
        ...state,
        isMenuOpen: false,
      };
    default:
      return state;
  }
};

export default reducer;
