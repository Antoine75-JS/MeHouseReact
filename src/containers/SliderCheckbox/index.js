import { connect } from 'react-redux';
import SliderCheckbox from 'src/components/Utils/SliderCheckBox';
import {
  selectShopItem,
  deselectShopItem,
  setSliderShopStatus,
  setSliderOn,
  setSliderOff,
} from 'src/actions/shopping';

const mapStateToProps = (state) => ({
  isSliderOn: state.slider.isSliderOn,
  isShopItemSelected: state.shopping.isShopItemSelected,
  isLoading: state.loading.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  selectShopItem: (shopItemId) => dispatch(selectShopItem(shopItemId)),
  deselectShopItem: (shopItemId) => dispatch(deselectShopItem(shopItemId)),
  setSliderOn: () => dispatch(setSliderOn()),
  setSliderOff: () => dispatch(setSliderOff()),
  setSliderShopStatus: (isShopItemSelected) => dispatch((setSliderShopStatus(isShopItemSelected))),
});

export default connect(mapStateToProps, mapDispatchToProps)(SliderCheckbox);
