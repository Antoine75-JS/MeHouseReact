import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
  taskName: yup.string().required().typeError("Le nom de l'organisation doit contenir entre 3 et 30 caractères alphanumériques"),
  taskRepeat: yup.bool(),
  repeatFrequency: yup.number(),
});

const CreateTaskModal = ({
  orgaId,
  isLoading,
  open,
  isModalOpen,
  toastMessage,
  setErrMessage,
  closeModal,
  createTask,
}) => {
  const { id } = useParams();
  const catId = id.toString();

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

  // Handle listener esc key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

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

  // Submit Form
  const handlecreateTask = (data) => {
    console.log(data, catId, orgaId);
    createTask(data, catId, orgaId);
  };

  // Handle error message in Toast
  useEffect(() => {
    if (errors.taskName) {
      setErrMessage('Entrez un nom valide pour la tâche');
    }
    if (errors.taskRepeat) {
      setErrMessage('La répétition de la tâche rencontre un problème');
    }
    if (errors.repeatFrequency) {
      setErrMessage('La fréquence maximale est de 365 jours');
    }
  }, [errors]);

  return (
    <>
      {isOpen && (
        <div className="createTask">
          <div className="createTask-closeModal" onClick={handleCloseModal}>
            <p className="createTask-closeModal--cross">+</p>
          </div>
          <form onSubmit={handleSubmit(handlecreateTask)} className="createTask-form">
            <div className="createTask-form--input">
              <label htmlFor="taskName" className="createTask-form--input_title">Nom de la tâche</label>
              <input {...register('taskName')} type="text" name="taskName" className="createTask-form--input_field" />
            </div>
            <div className="createTask-form--input">
              <label htmlFor="taskRepeat" className="createTask-form--input_title">Répéter ?</label>
              <input {...register('taskRepeat')} type="checkbox" name="taskRepeat" className="createTask-form--input_field" />
            </div>
            <div className="createTask-form--input">
              <label htmlFor="repeatFrequency" className="createTask-form--input_title">Fréquence</label>
              <input {...register('repeatFrequency')} type="number" name="repeatFrequency" className="createTask-form--input_field" min="0" placeholder="7" />
            </div>
            <input type="submit" value="Créer" className="createOrga-form--btn" />
          </form>
          {open && <Toast />}
        </div>
      )}
    </>
  );
};

export default CreateTaskModal;
