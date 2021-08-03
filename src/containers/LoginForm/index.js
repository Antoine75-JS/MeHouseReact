import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';
import { submitLogin } from 'src/actions/user';
import { openToast } from 'src/actions/toast';

const mapStateToProps = (state) => ({
  isLoading: state.loading.isLoading,
  toastOpen: state.toast.open,
  toastMessage: state.toast.message,
});

const mapDispatchToProps = (dispatch) => ({
  submitLogin: (user, errMessage) => {
    dispatch(submitLogin(user, errMessage));
  },
  setErrMessage: (message) => {
    dispatch(openToast(message));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
