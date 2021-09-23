import { connect } from 'react-redux';
import MeHouse from 'src/components/MeHouse';

import { checkLogged } from 'src/actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  checkLogged: () => dispatch(checkLogged()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MeHouse);
