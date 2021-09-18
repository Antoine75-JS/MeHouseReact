import { connect } from 'react-redux';
import MenuComponent from 'src/components/MenuComponent';
import { openMenu, closeMenu } from 'src/actions/menu';

const mapStateToProps = (state) => ({
  isMenuOpen: state.menu.isMenuOpen,
  userOrgas: state.user.userOrgas,
  hasInvitesInOrgas: state.user.hasInvitesInOrgas,
});

const mapDispatchToProps = (dispatch) => ({
  closeMenu: () => dispatch(closeMenu()),
  openMenu: () => dispatch(openMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
