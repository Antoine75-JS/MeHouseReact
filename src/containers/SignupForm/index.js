import { connect } from 'react-redux';
import SignupForm from 'src/components/SignupForm';
import { signupNewUser } from 'src/actions/user';
import { openToast } from 'src/actions/toast';

const mapStateToProps = (state) => ({
  isLoading: state.loading.isLoading,
  open: state.toast.open,
  toastMessage: state.toast.message,
});

const mapDispatchToProps = (dispatch) => ({
  signupUser: (newUser, errMessage) => {
    dispatch(signupNewUser(newUser, errMessage));
  },
  setErrMessage: (message) => {
    dispatch(openToast(message));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
