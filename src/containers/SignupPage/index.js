import { connect } from 'react-redux';
import SignupPage from 'src/pages/signup';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  isSigned: state.user.isSigned,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
