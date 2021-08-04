import { connect } from 'react-redux';
import CatDetails from 'src/components/CatDetails';
import { openToast } from 'src/actions/toast';
import { deleteTask } from 'src/actions/tasks';
import { openModal, closeModal } from 'src/actions/modal';

const mapStateToProps = (state) => ({
  isModalOpen: state.modal.isModalOpen,
  isLoading: state.loading.isLoading,
  open: state.toast.open,
  toastMessage: state.toast.message,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal()),

  deleteTask: (taskId) => dispatch(deleteTask(taskId)),

  setErrMessage: (message) => {
    dispatch(openToast(message));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CatDetails);
