export const REDIRECT_TO = 'REDIRECT_TO';
export const RESET_REDIRECT_URL = 'RESET_REDIRECT_URL';

export const resetRedirectUrl = () => ({
  type: RESET_REDIRECT_URL,
});

export const redirectTo = (url) => ({
  type: REDIRECT_TO,
  url,
});
