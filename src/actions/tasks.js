export const CREATE_TASK = 'CREATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const GET_CATEGORY_TASKS = 'GET_CATEGORY_TASKS';
export const SET_CATEGORY_TASKS = 'SET_CATEGORY_TASKS';

export const setCatTasks = (payload) => ({
  type: SET_CATEGORY_TASKS,
  payload,
});

export const getCatTasks = (catId) => ({
  type: GET_CATEGORY_TASKS,
  catId,
});

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
