import { connect } from 'react-redux';
import ShoppingList from 'src/components/ShoppingList';
import {
  selectShopItem,
  deselectShopItem,
  createItemShopList,
  deleteItemShopList,
} from 'src/actions/shopping';

import { openToast } from 'src/actions/toast';

const mapStateToProps = (state) => ({
  isShopItemSelected: state.shopping.isShopItemSelected,
});

const mapDispatchToProps = (dispatch) => ({
  selectShopItem: () => dispatch(selectShopItem()),
  deselectShopItem: () => dispatch(deselectShopItem()),
  deleteItemShopList: (shopItemId) => dispatch(deleteItemShopList(shopItemId)),
  setErrMessage: (message) => dispatch(openToast(message)),
  createItemShopList: (data, orgaId) => dispatch(createItemShopList(data, orgaId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
