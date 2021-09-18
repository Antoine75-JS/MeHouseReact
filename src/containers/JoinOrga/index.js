import { connect } from 'react-redux';
import JoinOrga from 'src/components/JoinOrga';

// Import actions

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  hasInvitesInOrgas: state.user.hasInvitesInOrgas,
  userId: state.user.userId,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(JoinOrga);
