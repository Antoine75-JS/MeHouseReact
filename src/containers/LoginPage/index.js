import { connect } from 'react-redux';
import LoginPage from 'src/pages/login';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  isSigned: state.user.isSigned,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
