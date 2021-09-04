import React, { useEffect, useState, useRef } from 'react';

import './styles.scss';

const SliderCheckbox = ({
  isItemSelected,
  selectShopItem,
  deselectShopItem,
  itemId,
}) => {
  console.log('item :', itemId, 'item is :', isItemSelected);
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
      slider.className = 'sliderCheckbox-slider selected';
      console.log('selected', slider);
    }
    else {
      deselectShopItem(itemId);
      slider.className = 'sliderCheckbox-slider';
      console.log('deselected', slider);
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

export default SliderCheckbox;
