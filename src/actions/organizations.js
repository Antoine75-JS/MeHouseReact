export const LOAD_ORGAS = 'LOAD_ORGAS';
export const SAVE_LIST_ORGAS = 'SAVE_LIST_ORGAS';
export const CREATE_ORGA = 'CREATE_ORGA';

export const loadOrgas = () => ({
  type: LOAD_ORGAS,
});

export const saveListOrgas = (organizations) => ({
  type: SAVE_LIST_ORGAS,
  organizations,
});

export const createOrga = (payload) => ({
  type: CREATE_ORGA,
  payload,
});
