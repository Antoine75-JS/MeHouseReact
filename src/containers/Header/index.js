import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { submitLogout } from 'src/actions/user';
import { openMenu, closeMenu } from 'src/actions/menu';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  username: state.user.username,
  isMenuOpen: state.menu.isMenuOpen,
});

const mapDispatchToProps = (dispatch) => ({
  submitLogout: (errMessage) => {
    dispatch(submitLogout(errMessage));
  },
  openMenu: () => {
    dispatch(openMenu());
  },
  closeMenu: () => {
    dispatch(closeMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
