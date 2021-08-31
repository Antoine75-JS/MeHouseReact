import React, { useState } from 'react';

import './styles.scss';

const SliderCheckbox = () => {
  // Local state
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = () => {
    setIsSelected(!isSelected);
    console.log('selected!');
  };

  return (
    <div onClick={handleSelected} className="sliderCheckbox">
      <input type="checkbox" name="sliderCheckbox" />
      <div className={isSelected ? ("sliderCheckbox-slider--selected") : ("sliderCheckbox-slider--default")} />
      <div className="sliderCheckbox-background" />
    </div>
  );
};

export default SliderCheckbox;
