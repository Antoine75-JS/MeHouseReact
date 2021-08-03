import { connect } from 'react-redux';
import HomePage from 'src/pages/home';

const mapStateToProps = (state) => ({
  isLoading: state.loading.isLoading,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
