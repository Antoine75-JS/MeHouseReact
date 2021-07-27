// Actions types
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

// Action creator
export const startLoading = () => ({
  type: START_LOADING,
});

export const stopLoading = () => ({
  type: STOP_LOADING,
});
