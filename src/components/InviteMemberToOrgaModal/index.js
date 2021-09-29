import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

// Validation props
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Components
import Toast from 'src/containers/Toast';
import Loading from 'src/components/Utils/Loading';

import './styles.scss';

// Yup validation schema
const userInviteSchema = yup.object().shape({
  invitedUserEmail: yup
    .string()
    .email()
    .required()
    .typeError('Merci de renseigner une adresse email correcte')
    .matches(/^([a-zA-Z0-9-]+.)*[a-zA-Z0-9-]+@([a-zA-Z0-9_-])+([.])+([a-z]{2,8})$/),
  invitedUserName: yup.string().required().typeError('Le nom de la personne doit contenir entre 3 et 30 caractères alphanumériques').matches(/^[a-zA-Z0-9]{3,30}$/),
});

// Component
const InviteMemberToOrgaModal = ({
  isLoading,
  open,
  setErrMessage,
  closeModal,
  orgaId,
  orgaName,
  userName,
  inviteUserToOrga,
}) => {
  // Local state for css animation
  const [isOpen, setIsOpen] = useState(false);

  // Delay for css animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen(true);
    }, 300);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // RHF controlled components
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(userInviteSchema),
  });

  // Handle error message in form
  useEffect(() => {
    if (errors.invitedUserEmail) {
      setErrMessage('Merci de renseigner une adresse email correcte');
    }
    if (errors.invitedUserName) {
      setErrMessage('Merci de renseigner un nom correct');
    }
  }, [errors]);

  // We send names for custom email content
  const handleInviteUser = (data) => {
    inviteUserToOrga(orgaId, orgaName, userName, data);
  };

  // Handle button close modal
  const handleCloseModal = () => {
    closeModal();
  };

  // Handle listener esc key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {isOpen && (
        <div className="inviteUser">
          <div className="inviteUser-closeModal" onClick={handleCloseModal}>
            <p className="inviteUser-closeModal--cross">+</p>
          </div>
          <form onSubmit={handleSubmit(handleInviteUser)} className="inviteUser-form">
            <label htmlFor="invitedUserName" className="inviteUser-form--title">Nom de la personne
              <input {...register('invitedUserName')} type="text" name="invitedUserName" className="inviteUser-form--input" />
            </label>
            <label htmlFor="invitedUserEmail" className="inviteUser-form--title">Adresse email de la personne
              <input {...register('invitedUserEmail')} type="text" name="invitedUserEmail" className="inviteUser-form--input" />
            </label>
            <input type="submit" value="Envoyer l'invitation" className="inviteUser-form--btn" />
          </form>
        </div>
      )}
      {open && <Toast />}
    </>
  );
};

InviteMemberToOrgaModal.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  toastMessage: PropTypes.string,
  setErrMessage: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  orgaId: PropTypes.string.isRequired,
  orgaName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  inviteUserToOrga: PropTypes.func.isRequired,
};

InviteMemberToOrgaModal.defaultProps = {
  toastMessage: '',
};

export default InviteMemberToOrgaModal;
