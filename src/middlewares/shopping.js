import api from 'src/api';

import {
  DELETE_ITEM_SHOP_LIST,
  CREATE_ITEM_SHOP_LIST,
  SELECT_SHOP_ITEM,
  DESELECT_SHOP_ITEM,
} from 'src/actions/shopping';
import { getOrgaDetails } from 'src/actions/organizations';
// Utils
import { openToast } from 'src/actions/toast';
import { startLoading, stopLoading } from 'src/actions/loading';

const shoppingMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_ITEM_SHOP_LIST: {
      store.dispatch(startLoading());
      api.post(`/shopping/${action.orgaId}`, {
        shopItemName: action.payload.shopItemName,
      })
        .then((response) => {
          if (response.status === 201) {
            store.dispatch(openToast('Item ajouté'));
            store.dispatch(getOrgaDetails(action.orgaId));
            next(action);
          }
        })
        .catch((err) => {
          console.trace(err);
          store.dispatch(err.message);
        })
        .finally(() => {
          store.dispatch(stopLoading());
        });
      break;
    }
    case SELECT_SHOP_ITEM: {
      api.patch(`/shopping/${action.shopItemId}`, {
        isShopItemSelected: true,
      })
        .then((response) => {
          if (response.status === 200) {
            next(action);
          }
        })
        .catch((err) => {
          console.trace(err);
          store.dispatch(err.message);
        });
      break;
    }
    case DESELECT_SHOP_ITEM: {
      api.patch(`/shopping/${action.shopItemId}`, {
        isShopItemSelected: false,
      })
        .then((response) => {
          if (response.status === 200) {
            next(action);
          }
        })
        .catch((err) => {
          console.trace(err);
        });
      break;
    }
    case DELETE_ITEM_SHOP_LIST: {
      store.dispatch(startLoading());
      api.delete(`/shopping/${action.shopItemId}`)
        .then((response) => {
          if (response.status === 200) {
            store.dispatch(openToast('Item supprimé'));
            store.dispatch(getOrgaDetails(response.data.orgaId));
            next(action);
          }
        })
        .catch((err) => {
          console.trace(err);
          store.dispatch(err.message);
        })
        .finally(() => {
          store.dispatch(stopLoading());
        });
      break;
    }
    default: next(action);
  }
};

export default shoppingMiddleware;
