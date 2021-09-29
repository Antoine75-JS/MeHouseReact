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
const orgaSchema = yup.object().shape({
  orgName: yup.string().required().typeError("Le nom de l'organisation doit contenir entre 3 et 30 caractères alphanumériques").matches(/^[a-zA-Z0-9]{3,30}$/),
});

// Component
const CreateOrgaModal = ({
  isLoading,
  open,
  setErrMessage,
  closeModal,
  userId,
  createOrga,
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
    resolver: yupResolver(orgaSchema),
  });

  // Handle error message in form
  useEffect(() => {
    if (errors.orgName) {
      setErrMessage('Le nom de l\'organisation ne doit pas contenir d\'espaces');
    }
  }, [errors]);

  const handleCreateOrga = (data) => {
    createOrga(userId, data);
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
        <div className="createOrga">
          <div className="createOrga-closeModal" onClick={handleCloseModal}>
            <p className="createOrga-closeModal--cross">+</p>
          </div>
          <form onSubmit={handleSubmit(handleCreateOrga)} className="createOrga-form">
            <label htmlFor="orgName" className="createOrga-form--title">Nom de l'organisation
              <input {...register('orgName')} type="text" name="orgName" className="createOrga-form--input" />
            </label>
            <input type="submit" value="Créer" className="createOrga-form--btn" />
          </form>
        </div>
      )}
      {open && <Toast />}
    </>
  );
};

CreateOrgaModal.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  toastMessage: PropTypes.string,
  setErrMessage: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  createOrga: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

CreateOrgaModal.defaultProps = {
  toastMessage: '',
};

export default CreateOrgaModal;
