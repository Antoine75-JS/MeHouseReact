/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
  email: yup.string().email().required().matches(/^([a-zA-Z0-9-]+.)*[a-zA-Z0-9-]+@([a-zA-Z0-9_-])+([.])+([a-z]{2,8})$/),
  password: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/),
  repeat_password: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/),
});

const LoginForm = ({
  submitLogin,
  setErrMessage,
  isLoading,
  toastOpen,
  toastMessage,
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(userSchema),
  });

  // Handle error message in Toast
  useEffect(() => {
    if (errors.email) {
      setErrMessage('Une adresse email au format correct est requise');
    }
    if (errors.password) {
      setErrMessage('Le mot de passe doit contenir au moins une lettre minuscule, majuscule et un chiffre');
    }
  }, [errors]);

  const handleLogin = (data) => {
    if (data.password !== data.repeat_password) {
      setErrMessage('Les mots de passe renseignés ne correspondent pas');
    }
    else {
      submitLogin(data, toastMessage);
    }
  };

  return (
    <>
      <div className="login">
        {isLoading && <Loading />}
        <form onSubmit={handleSubmit(handleLogin)} className="login-form">
          <label htmlFor="email">Adresse Email</label>
          <input {...register('email')} name="email" className="login-form--input" />
          <p className="login-form--errors">{errors.email?.message}</p>

          <label htmlFor="password">Mot de passe</label>
          <input {...register('password')} name="password" type="password" className="login-form--input" />
          <p className="login-form--errors">{errors.password?.message}</p>

          <label htmlFor="repeat_password">Répétez le mot de passe</label>
          <input {...register('repeat_password')} name="repeat_password" type="password" className="login-form--input" />
          <p className="login-form--errors">{errors.repeat_password?.message}</p>

          <input type="submit" value="S'inscrire" className="login-form--btn" />
        </form>

        {toastOpen && <Toast />}
        <Link to="/signup">
          <h3 className="login-link">Pas de compte ?
            <span className="login-link--link"> Créer un compte</span>
          </h3>
        </Link>
      </div>
    </>
  );
};

LoginForm.propTypes = {
  submitLogin: PropTypes.func.isRequired,
  setErrMessage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  toastOpen: PropTypes.bool.isRequired,
  toastMessage: PropTypes.string.isRequired,
};

export default LoginForm;
