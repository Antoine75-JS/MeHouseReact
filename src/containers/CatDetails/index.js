import { connect } from 'react-redux';
import CatDetails from 'src/components/CatDetails';

// Actions
import { openToast } from 'src/actions/toast';
import { redirectTo, resetRedirectUrl } from 'src/actions/utils';
import { deleteTask, getCatTasks, resetTask } from 'src/actions/tasks';
import { openModal, closeModal } from 'src/actions/modal';
import { createCategory, deleteCategory } from 'src/actions/categories';

const mapStateToProps = (state) => ({
  isModalOpen: state.modal.isModalOpen,
  isLoading: state.loading.isLoading,
  open: state.toast.open,
  toastMessage: state.toast.message,
  isLogged: state.user.isLogged,
  catTasks: state.organizations.catTasks,
  catName: state.organizations.catName,
  orgaId: state.organizations.orgaId,
  redirectUrl: state.utils.redirectUrl,
});

const mapDispatchToProps = (dispatch) => ({
  // UX
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal()),
  setErrMessage: (message) => {
    dispatch(openToast(message));
  },
  // Tasks
  deleteTask: (catId, taskId) => dispatch(deleteTask(catId, taskId)),
  resetTask: (catId, taskId) => dispatch(resetTask(catId, taskId)),
  getCatTasks: (catId) => dispatch(getCatTasks(catId)),
  // categories
  createCategory: (data, orgaId) => dispatch(createCategory(data, orgaId)),
  deleteCategory: (catId) => dispatch(deleteCategory(catId)),
  // Redirect
  redirectTo: (url) => dispatch(redirectTo(url)),
  resetRedirectUrl: () => dispatch(resetRedirectUrl()),

});

export default connect(mapStateToProps, mapDispatchToProps)(CatDetails);
