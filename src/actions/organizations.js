export const CREATE_ORGA = 'CREATE_ORGA';
export const GET_ORGA_DETAILS = 'GET_ORGA_DETAILS';
export const SET_ORGA_DETAILS = 'SET_ORGA_DETAILS';

export const setOrgaDetails = (payload) => ({
  type: SET_ORGA_DETAILS,
  payload,
});

export const getOrgaDetails = (orgId) => ({
  type: GET_ORGA_DETAILS,
  orgId,
});

export const createOrga = (payload) => ({
  type: CREATE_ORGA,
  payload,
});
