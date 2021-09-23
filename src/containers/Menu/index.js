import { connect } from 'react-redux';
import MenuComponent from 'src/components/MenuComponent';

// Import Actions
import { openMenu, closeMenu } from 'src/actions/menu';
import { redirectTo, resetRedirectUrl } from 'src/actions/utils';

const mapStateToProps = (state) => ({
  isMenuOpen: state.menu.isMenuOpen,
  userOrgas: state.user.userOrgas,
  hasInvitesInOrgas: state.user.hasInvitesInOrgas,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  closeMenu: () => dispatch(closeMenu()),
  openMenu: () => dispatch(openMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
