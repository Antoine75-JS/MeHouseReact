import { connect } from 'react-redux';
import Logout from 'src/components/Logout';
import { submitLogout } from 'src/actions/user';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  submitLogout: () => dispatch(submitLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
