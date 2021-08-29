import { connect } from 'react-redux';
import MenuComponent from 'src/components/MenuComponent';

const mapStateToProps = (state) => ({
  isMenuOpen: state.menu.isMenuOpen,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
