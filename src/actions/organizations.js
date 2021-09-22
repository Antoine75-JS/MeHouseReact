export const CREATE_ORGA = 'CREATE_ORGA';
export const GET_ORGA_DETAILS = 'GET_ORGA_DETAILS';
export const SET_ORGA_DETAILS = 'SET_ORGA_DETAILS';
export const INVITE_USER_TO_ORGA = 'INVITE_USER_TO_ORGA';
export const JOIN_ORGA_FROM_INVITE = 'JOIN_ORGA_FROM_INVITE';

export const joinOrgaFromInvite = (userId, orgaId) => ({
  type: JOIN_ORGA_FROM_INVITE,
  userId,
  orgaId,
});

export const inviteUserToOrga = (orgaId, orgaName, userName, payload) => ({
  type: INVITE_USER_TO_ORGA,
  orgaId,
  orgaName,
  userName,
  payload,
});

export const setOrgaDetails = (payload) => ({
  type: SET_ORGA_DETAILS,
  payload,
});

export const getOrgaDetails = (orgId) => ({
  type: GET_ORGA_DETAILS,
  orgId,
});

export const createOrga = (userId, payload) => ({
  type: CREATE_ORGA,
  userId,
  payload,
});
