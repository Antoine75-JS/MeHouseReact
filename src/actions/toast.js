// Actions types
export const OPEN_TOAST = 'OPEN_TOAST';
export const CLOSE_TOAST = 'CLOSE_TOAST';

// Action creator
export const openToast = (message) => ({
  type: OPEN_TOAST,
  message,
});

export const closeToast = () => ({
  type: CLOSE_TOAST,
});
