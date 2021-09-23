// For flex purposes
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
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
  // eslint-disable-next-line newline-per-chained-call
  taskName: yup.string().required().typeError("Le nom de l'organisation doit contenir entre 3 et 30 caractères alphanumériques").min(3).max(30),
  taskRepeat: yup.bool(),
  repeatFrequency: yup.number().required(false).max(365),
});

const CreateTaskModal = ({
  orgaId,
  isLoading,
  open,
  setErrMessage,
  closeModal,
  createTask,
}) => {
  const { id } = useParams();
  const catId = id.toString();

  // Local state for css animation
  const [isOpen, setIsOpen] = useState(false);
  const [defaultFreq, setDefaultFreq] = useState(undefined);

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
      setErrMessage("Le nom de l'organisation doit contenir entre 3 et 30 caractères alphanumériques");
    }
    if (errors.taskRepeat) {
      setErrMessage('La répétition de la tâche rencontre un problème');
    }
    if (errors.repeatFrequency) {
      // if (errors.repeatFrequency.type === "typeError") {
      //   req.body.repeatFrequency = 0;
      // }
      // console.log(errors.repeatFrequency);
      setErrMessage('La fréquence maximale est de 365 jours');
    }
  }, [errors]);

  return (
    <>
      {isLoading && <Loading />}
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
              <input {...register('repeatFrequency')} type="number" name="repeatFrequency" className="createTask-form--input_field" min="0" placeholder="0 si pas de répétition" value={defaultFreq} />
            </div>
            <input type="submit" value="Créer" className="createOrga-form--btn" />
          </form>
          {open && <Toast />}
        </div>
      )}
    </>
  );
};

CreateTaskModal.propTypes = {
  orgaId: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  setErrMessage: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
};

export default CreateTaskModal;
