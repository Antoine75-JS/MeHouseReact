export const CREATE_CATEGORY = 'CREATE_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';

export const deleteCategory = (catId) => ({
  type: DELETE_CATEGORY,
  catId,
});

export const createCategory = (payload, orgaId) => ({
  type: CREATE_CATEGORY,
  payload,
  orgaId,
});
