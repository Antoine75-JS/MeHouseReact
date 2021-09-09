export const REDIRECT_TO = 'REDIRECT_TO';

export const redirectTo = (url) => {
  console.log('new url:', url);
  return {
    type: REDIRECT_TO,
    url,
  };
};
