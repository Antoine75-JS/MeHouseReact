export const CREATE_TASK = 'CREATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  taskId,
});

export const createTask = (payload, catId, orgaId) => ({
  type: CREATE_TASK,
  payload,
  catId,
  orgaId,
});
