import { connect } from 'react-redux';
import OrgaHome from 'src/components/OrgaHome';
import { getOrgaDetails, setOrgaDetails } from 'src/actions/organizations';
import { openToast } from 'src/actions/toast';
import { openModal } from 'src/actions/modal';
import { createCategory } from 'src/actions/categories';

const mapStateToProps = (state) => ({
  isToastOpen: state.toast.open,
  isLoading: state.loading.isLoading,
  isLogged: state.user.isLogged,
  orgName: state.organizations.orgName,
  orgUsers: state.organizations.orgUsers,
  orgCategories: state.organizations.orgCategories,
  orgShoppingList: state.organizations.orgShoppingList,
  orgEvents: state.organizations.orgEvents,
  orgaId: state.organizations.orgaId,
  isModalOpen: state.modal.isModalOpen,
});

const mapDispatchToProps = (dispatch) => ({
  getOrgaDetails: (orgaId) => {
    dispatch(getOrgaDetails(orgaId));
  },
  setOrgaDetails: (data) => {
    dispatch(setOrgaDetails(data));
  },
  setToastMessage: (message) => {
    dispatch(openToast(message));
  },
  openModal: () => dispatch(openModal()),
  createCategory: (data, orgaId) => dispatch(createCategory(data, orgaId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrgaHome);
