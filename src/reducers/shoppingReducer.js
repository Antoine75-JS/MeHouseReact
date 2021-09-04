import {
  SELECT_SHOP_ITEM,
  DESELECT_SHOP_ITEM,
  DELETE_ITEM_SHOP_LIST,
  CREATE_ITEM_SHOP_LIST,
  SET_SLIDER_SHOP_STATUS,
} from 'src/actions/shopping';

export const initialState = {
  isShopItemSelected: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SELECT_SHOP_ITEM:
      return {
        ...state,
        isShopItemSelected: true,
      };
    case CREATE_ITEM_SHOP_LIST:
      return {
        ...state,
      };
    case DESELECT_SHOP_ITEM:
      return {
        ...state,
        isShopItemSelected: false,
      };
    case DELETE_ITEM_SHOP_LIST:
      return {
        ...state,
      };
    case SET_SLIDER_SHOP_STATUS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
