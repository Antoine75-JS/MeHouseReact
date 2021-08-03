import { connect } from 'react-redux';
import CreateOrgaModal from 'src/components/CreateOrgaModal';
import { openToast } from 'src/actions/toast';
import { openModal, closeModal } from 'src/actions/modal';

const mapStateToProps = (state) => ({
  userId: state.user.userId,
  isModalOpen: state.modal.isModalOpen,
  isLoading: state.loading.isLoading,
  open: state.toast.open,
  toastMessage: state.toast.message,
});

const mapDispatchToProps = (dispatch) => ({
  // createOrga: (newUser, errMessage) => {
  //   dispatch(signupNewUser(newUser, errMessage));
  // },
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal()),

  setErrMessage: (message) => {
    dispatch(openToast(message));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrgaModal);
