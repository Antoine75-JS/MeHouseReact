import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const SliderCheckbox = ({
  isItemSelected,
  selectShopItem,
  deselectShopItem,
  itemId,
}) => {
  const [selected, setSelected] = useState(false);

  const sliderRef = useRef(null);

  useEffect(() => {
    setSelected(isItemSelected);
  }, [selected]);

  const handleSelected = () => {
    const slider = sliderRef.current;
    console.log();
    if (slider.className === 'sliderCheckbox-slider') {
      selectShopItem(itemId);
      slider.className = 'slidrCheckbox-slider selected';
      slider.closest('li > div').className = 'shoppingComponent-list--item_card-selected';
    }
    else {
      deselectShopItem(itemId);
      slider.className = 'sliderCheckbox-slider';
      slider.closest('li > div').className = 'shoppingComponent-list--item_card';
    }
  };

  return (
    <div onClick={handleSelected} className="sliderCheckbox">
      <input type="checkbox" name="sliderCheckbox" />
      <div ref={sliderRef} className={selected ? 'sliderCheckbox-slider selected' : 'sliderCheckbox-slider'} />
      <div className="sliderCheckbox-background" />
    </div>
  );
};

SliderCheckbox.propTypes = {
  isItemSelected: PropTypes.bool.isRequired,
  selectShopItem: PropTypes.func.isRequired,
  deselectShopItem: PropTypes.func.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default SliderCheckbox;
