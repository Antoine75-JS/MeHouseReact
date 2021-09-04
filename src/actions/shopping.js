// Actions types
export const SELECT_SHOP_ITEM = 'SELECT_SHOP_ITEM';
export const DESELECT_SHOP_ITEM = 'DESELECT_SHOP_ITEM';
export const DELETE_ITEM_SHOP_LIST = 'DELETE_ITEM_SHOP_LIST';
export const CREATE_ITEM_SHOP_LIST = 'CREATE_ITEM_SHOP_LIST';
export const SET_SLIDER_SHOP_STATUS = 'SET_SLIDER_SHOP_STATUS';
export const SET_SLIDER_ON = 'SET_SLIDER_ON';
export const SET_SLIDER_OFF = 'SET_SLIDER_OFF';

export const setSliderOn = () => ({
  type: SET_SLIDER_ON,
});

export const setSliderOff = () => ({
  type: SET_SLIDER_OFF,
});

// Action creator
export const setSliderShopStatus = (isShopItemSelected) => ({
  type: SET_SLIDER_SHOP_STATUS,
  isShopItemSelected,
});

export const createItemShopList = (payload, orgaId) => ({
  type: CREATE_ITEM_SHOP_LIST,
  payload,
  orgaId,
});

export const deleteItemShopList = (shopItemId) => ({
  type: DELETE_ITEM_SHOP_LIST,
  shopItemId,
});

export const selectShopItem = (shopItemId) => ({
  type: SELECT_SHOP_ITEM,
  shopItemId,
});

export const deselectShopItem = (shopItemId) => ({
  type: DESELECT_SHOP_ITEM,
  shopItemId,
});
