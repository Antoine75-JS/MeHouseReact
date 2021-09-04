import {
  SET_SLIDER_ON,
  SET_SLIDER_OFF,
} from 'src/actions/shopping';

export const initialState = {
  // isSliderOn: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SLIDER_ON:
      return {
        ...state,
        isSliderOn: true,
      };
    case SET_SLIDER_OFF:
      return {
        ...state,
        isSliderOn: false,
      };
    default:
      return state;
  }
};

export default reducer;
