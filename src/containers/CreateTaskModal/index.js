import { connect } from 'react-redux';
import CreateTaskModal from 'src/components/CreateTaskModal';
import { openToast } from 'src/actions/toast';
import { openModal, closeModal } from 'src/actions/modal';
import { createTask } from 'src/actions/tasks';

const mapStateToProps = (state) => ({
  orgaId: state.organizations.orgaId,
  isModalOpen: state.modal.isModalOpen,
  isLoading: state.loading.isLoading,
  open: state.toast.open,
  toastMessage: state.toast.message,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal()),

  createTask: (data, catId, orgaId) => dispatch(createTask(data, catId, orgaId)),
  setErrMessage: (message) => dispatch(openToast(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskModal);
