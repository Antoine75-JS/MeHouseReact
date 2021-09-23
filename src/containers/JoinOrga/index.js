import { connect } from 'react-redux';
import JoinOrga from 'src/components/JoinOrga';

// Import actions
import { redirectTo, resetRedirectUrl } from 'src/actions/utils';
import { joinOrgaFromInvite } from 'src/actions/organizations';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  hasInvitesInOrgas: state.user.hasInvitesInOrgas,
  userId: state.user.userId,
  toastOpen: state.toast.open,
  redirectUrl: state.utils.redirectUrl,
});

const mapDispatchToProps = (dispatch) => ({
  joinOrgaFromInvite: (userId, orgaId) => {
    dispatch(joinOrgaFromInvite(userId, orgaId));
  },
  // Redirect
  redirectTo: (url) => dispatch(redirectTo(url)),
  resetRedirectUrl: () => dispatch(resetRedirectUrl()),
});

export default connect(mapStateToProps, mapDispatchToProps)(JoinOrga);
