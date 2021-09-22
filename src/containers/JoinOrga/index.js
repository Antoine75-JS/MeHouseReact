import { connect } from 'react-redux';
import JoinOrga from 'src/components/JoinOrga';

// Import actions
import { joinOrgaFromInvite } from 'src/actions/organizations';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  hasInvitesInOrgas: state.user.hasInvitesInOrgas,
  userId: state.user.userId,
  toastOpen: state.toast.open,
});

const mapDispatchToProps = (dispatch) => ({
  joinOrgaFromInvite: (userId, orgaId) => {
    dispatch(joinOrgaFromInvite(userId, orgaId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(JoinOrga);
