/* eslint-disable no-underscore-dangle */
import { GET_ORGA_DETAILS, SET_ORGA_DETAILS } from 'src/actions/organizations';
import { GET_CATEGORY_TASKS, SET_CATEGORY_TASKS } from 'src/actions/tasks';

export const initialState = {
  orgCategories: [],
  catTasks: [],
  orgShoppingList: [],
  orgUsers: [],
  orgaId: null,
  catId: null,
  catName: '',
  orgName: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ORGA_DETAILS:
      return {
        ...state,
        orgaId: action.payload.id,
      };
    case SET_ORGA_DETAILS:
      return {
        ...state,
        orgCategories: action.payload.orgCategories,
        orgName: action.payload.orgName,
        orgUsers: action.payload.orgUsers,
        orgaId: action.payload._id,
        orgShoppingList: action.payload.orgShoppingList,
      };
    case GET_CATEGORY_TASKS:
      return {
        ...state,
        catId: action.payload.id,
      };
    case SET_CATEGORY_TASKS:
      return {
        ...state,
        catName: action.payload.catName,
        catTasks: action.payload.catTasks,
      };
    default:
      return state;
  }
};

export default reducer;
