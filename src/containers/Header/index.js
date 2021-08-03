import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { submitLogout } from 'src/actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  username: state.user.username,
});

const mapDispatchToProps = (dispatch) => ({
  submitLogout: (errMessage) => {
    dispatch(submitLogout(errMessage));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
