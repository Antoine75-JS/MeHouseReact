import { connect } from 'react-redux';
import CatDetails from 'src/components/CatDetails';
import { openToast } from 'src/actions/toast';
import { deleteTask, getCatTasks } from 'src/actions/tasks';
import { openModal, closeModal } from 'src/actions/modal';

const mapStateToProps = (state) => ({
  isModalOpen: state.modal.isModalOpen,
  isLoading: state.loading.isLoading,
  open: state.toast.open,
  toastMessage: state.toast.message,
  isLogged: state.user.isLogged,
  catTasks: state.organizations.catTasks,
  catName: state.organizations.catName,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal()),

  deleteTask: (taskId) => dispatch(deleteTask(taskId)),
  getCatTasks: (catId) => dispatch(getCatTasks(catId)),

  setErrMessage: (message) => {
    dispatch(openToast(message));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CatDetails);
