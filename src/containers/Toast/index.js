import { connect } from 'react-redux';
import ToastComponent from 'src/components/Toast';
import { closeToast } from 'src/actions/toast';

const mapStateToProps = (state) => ({
  open: state.toast.open,
  message: state.toast.message,
});

const mapDispatchToProps = (dispatch) => ({
  unsetErrMessage: () => {
    dispatch(closeToast());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ToastComponent);
