import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ToastComponent = ({ errors, hasErrors }) => {
  console.log(errors, hasErrors);
  const [isVisible, setIsVisible] = useState(hasErrors);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={isVisible ? 'toastComponent toast-in' : 'toastComponent toast-out'}>
      <p>{errors}</p>
    </div>
  );
};

ToastComponent.propTypes = {
  errors: PropTypes.string.isRequired,
  hasErrors: PropTypes.bool.isRequired,
};

export default ToastComponent;
