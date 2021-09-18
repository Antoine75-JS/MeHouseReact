import { connect } from 'react-redux';
import InviteMemberToOrgaModal from 'src/components/InviteMemberToOrgaModal';
import { openToast } from 'src/actions/toast';
import { openModal, closeModal } from 'src/actions/modal';
import { inviteUserToOrga } from 'src/actions/organizations';

const mapStateToProps = (state) => ({
  orgaId: state.organizations.orgaId,
  isModalOpen: state.modal.isModalOpen,
  isLoading: state.loading.isLoading,
  open: state.toast.open,
  toastMessage: state.toast.message,
  userName: state.user.username,
  orgaName: state.organizations.orgName,
});

const mapDispatchToProps = (dispatch) => ({
  inviteUserToOrga: (orgaId, payload) => {
    dispatch(inviteUserToOrga(orgaId, payload));
  },
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal()),

  setErrMessage: (message) => {
    dispatch(openToast(message));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InviteMemberToOrgaModal);
