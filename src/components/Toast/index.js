import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ToastComponent = ({
  unsetErrMessage,
  message,
  open,
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      unsetErrMessage();
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [message]);

  const handleClickToast = () => {
    unsetErrMessage();
  };

  return (
    <div className={open ? 'toastComponent toast-in' : 'toastComponent toast-out'} onClick={handleClickToast}>
      <p className="toastComponent-message">{message}</p>
    </div>
  );
};

ToastComponent.propTypes = {
  unsetErrMessage: PropTypes.func.isRequired,
  message: PropTypes.string,
  open: PropTypes.bool,
};

ToastComponent.defaultProps = {
  message: '',
  open: false,
};

export default ToastComponent;
