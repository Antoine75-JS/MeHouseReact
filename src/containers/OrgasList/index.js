import { connect } from 'react-redux';
import OrgasListComponent from 'src/components/OrgasListComponent';
import { openToast } from 'src/actions/toast';
import { openModal, closeModal } from 'src/actions/modal';

const mapStateToProps = (state) => ({
  isModalOpen: state.modal.isModalOpen,
  isLoading: state.loading.isLoading,
  open: state.toast.open,
  toastMessage: state.toast.message,
  isLogged: state.user.isLogged,
  userId: state.user.userId,
  username: state.user.username,
  userOrgas: state.user.userOrgas,
});

const mapDispatchToProps = (dispatch) => ({
  // CHECK IF USED SOMEWHERE !!!
  // createOrga: (newUser, errMessage) => {
  //   dispatch(signupNewUser(newUser, errMessage));
  // },

  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal()),

  setErrMessage: (message) => {
    dispatch(openToast(message));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OrgasListComponent);
