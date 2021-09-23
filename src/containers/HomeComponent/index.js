import { connect } from 'react-redux';
import HomeComponent from 'src/components/HomeComponent';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
