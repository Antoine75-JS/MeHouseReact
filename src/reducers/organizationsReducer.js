/* eslint-disable no-underscore-dangle */
import { GET_ORGA_DETAILS, SET_ORGA_DETAILS } from 'src/actions/organizations';
import { GET_CATEGORY_TASKS, SET_CATEGORY_TASKS } from 'src/actions/tasks';
import { DELETE_CATEGORY, CREATE_CATEGORY } from 'src/actions/categories';

export const initialState = {
  orgCategories: [],
  catTasks: [],
  orgShoppingList: [],
  orgEvents: [],
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
        orgEvents: action.payload.orgEvents,
      };
    case GET_CATEGORY_TASKS:
      return {
        ...state,
        catId: action.catId,
      };
    case SET_CATEGORY_TASKS:
      return {
        ...state,
        catName: action.payload.catName,
        catTasks: action.payload.catTasks,
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        isCatDeleted: true,
      };
    case CREATE_CATEGORY:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
