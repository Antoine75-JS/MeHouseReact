import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ToastComponent = ({ errors, hasErrors }) => {
  console.log(errors, hasErrors);
  const [errorMessage, setErrorMessage] = useState('');
  const [isTrue, setIsTrue] = useState(hasErrors);
  const [isVisible, setIsVisible] = useState(isTrue);

  useEffect(() => {
    console.log(errors);
    setErrorMessage(errors);
  }, [errors]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTrue(false);
      setIsVisible(false);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [errorMessage]);

  return (
    <div className={isVisible ? 'toastComponent toast-in' : 'toastComponent toast-out'}>
      <p>{errorMessage}</p>
    </div>
  );
};

ToastComponent.propTypes = {
  errors: PropTypes.string.isRequired,
  hasErrors: PropTypes.bool.isRequired,
};

export default ToastComponent;
