import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

// Validation props
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// API
import api from 'src/api';

// Components
import Toast from 'src/containers/Toast';
import Loading from 'src/components/Loading';

import './styles.scss';

// Yup validation schema
const orgaSchema = yup.object().shape({
  orgName: yup.string().required().typeError("Le nom de l'organisation doit contenir entre 3 et 30 caractères alphanumériques").matches(/^[a-zA-Z0-9]{3,30}$/),
});

// Component
const CreateOrgaModal = ({ isLoading, open, toastMessage, setErrMessage, closeModal, openModal }) => {
  console.log(isLoading, open, toastMessage);
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
    console.log(data);
    api.post('/orgas/', {
      orgName: data.orgName,
    })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          closeModal();
          setErrMessage('Organisation créee !');
        }
      })
      .catch((err) => {
        console.trace(err);
      }).finally(() => {
      });
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

  // Handle error message in Toast
  useEffect(() => {
    if (errors.orgName) {
      console.log(errors);
    }
  }, [errors]);

  return (
    <>
      {isOpen && (
        <div className="createOrga">
          <div className="createOrga-closeModal" onClick={handleCloseModal}>
            <p className="createOrga-closeModal--cross">+</p>
          </div>
          <form onSubmit={handleSubmit(handleCreateOrga)} className="createOrga-form">
            <label htmlFor='orgName' className="createOrga-form--title">Nom de l'organisation</label>
            <input {...register('orgName')} type="text" name="orgName" className="createOrga-form--input" />
            <input type="submit" value="Créer" className="createOrga-form--btn" />
          </form>
        </div>
      )}
      {open && <Toast />}
    </>
  );
};

export default CreateOrgaModal;
