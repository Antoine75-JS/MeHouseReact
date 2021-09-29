/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

// Validation props
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Components
import Toast from 'src/containers/Toast';
import Loading from 'src/components/Utils/Loading';

// Styles
import './styles.scss';

const userSchema = yup.object().shape({
  username: yup.string().required().typeError("Le nom d'utilisateur doit contenir entre 3 et 30 caractères alphanumériques").matches(/^[a-zA-Z0-9]{3,30}$/),
  email: yup.string().email().required().matches(/^([a-zA-Z0-9-]+.)*[a-zA-Z0-9-]+@([a-zA-Z0-9_-])+([.])+([a-z]{2,8})$/),
  password: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/),
  repeat_password: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/),
});

const SignupForm = ({
  signupUser,
  setErrMessage,
  open,
  toastMessage,
  isLoading,
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(userSchema),
  });

  // Check if passwords match before signup method
  const handleSignup = (data) => {
    if (data.password !== data.repeat_password) {
      setErrMessage('Les mots de passe ne correspondent pas');
    }
    else {
      signupUser(data, toastMessage);
    }
  };

  // Handle error message in Toast
  useEffect(() => {
    if (errors.email) {
      setErrMessage('Une adresse email au format correct est requise');
    }
    if (errors.username) {
      setErrMessage('Un nom d\'utilisateur entre 3 et 30 caractères est requis');
    }
    if (errors.password) {
      setErrMessage('Le mot de passe doit contenir au moins une lettre minuscule, majuscule et un chiffre');
    }
  }, [errors]);

  return (
    <>
      {isLoading && <Loading />}
      <form onSubmit={handleSubmit(handleSignup)} className="signup-form">
        <label htmlFor="username">Nom d'utilisateur</label>
        <input {...register('username')} name="username" className="signup-form--input" />
        <p className="signup-form--errors">{errors.username?.message}</p>

        <label htmlFor="email">Adresse Email</label>
        <input {...register('email')} name="email" className="signup-form--input" />
        <p className="signup-form--errors">{errors.email?.message}</p>

        <label htmlFor="password">Mot de passe</label>
        <input {...register('password')} name="password" type="password" className="signup-form--input" />
        <p className="signup-form--errors">{errors.password?.message}</p>

        <label htmlFor="repeat_password">Répétez le mot de passe</label>
        <input {...register('repeat_password')} name="repeat_password" type="password" className="signup-form--input" />
        <p className="signup-form--errors">{errors.repeat_password?.message}</p>

        <input type="submit" value="S'inscrire" className="signup-form--btn" />
      </form>

      {open && <Toast />}
    </>
  );
};

SignupForm.propTypes = {
  signupUser: PropTypes.func.isRequired,
  setErrMessage: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  toastMessage: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

SignupForm.defaultProps = {
  toastMessage: '',
};

export default SignupForm;
