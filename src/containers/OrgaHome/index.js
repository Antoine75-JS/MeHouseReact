import { connect } from 'react-redux';
import OrgaHome from 'src/components/OrgaHome';
import { getOrgaDetails } from 'src/actions/organizations';
import { openToast } from 'src/actions/toast';

const mapStateToProps = (state) => ({
  isToastOpen: state.toast.open,
  isLoading: state.loading.isLoading,
  isLogged: state.user.isLogged,
  orgName: state.organizations.orgName,
  orgUsers: state.organizations.orgUsers,
  orgCategories: state.organizations.orgCategories,
  orgShoppingList: state.organizations.orgShoppingList,
  orgaId: state.organizations.orgaId,
});

const mapDispatchToProps = (dispatch) => ({
  getOrgaDetails: (orgaId) => {
    dispatch(getOrgaDetails(orgaId));
  },
  setToastMessage: (message) => {
    dispatch(openToast(message));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OrgaHome);
