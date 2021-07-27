import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

// API
import api from 'src/api';

// Validation props
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Components
import Toast from 'src/components/Toast';

// Styles
import './styles.scss';

const userSchema = yup.object().shape({
  username: yup.string().required().matches(/^[a-zA-Z0-9]{3,30}$/),
  email: yup.string().email().required().matches(/^([a-zA-Z0-9-]+.)*[a-zA-Z0-9-]+@([a-zA-Z0-9_-])+([.])+([a-z]{2,8})$/),
  password: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/),
  repeat_password: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/),
});

const SignupForm = () => {
  // state
  const [loading, setLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(userSchema),
  });

  const handleSignup = (data) => {
    console.log(data);
    setLoading(true);
    if (data.password !== data.repeat_password) {
      setHasErrors(true);
      setToastMessage('Les mots de passe ne correspondent pas');
    }
    else {
      api.post('/users/', {
        username: data.username,
        email: data.email,
        password: data.password,
        repeat_password: data.repeat_password,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          // Handle email if already exists
          if (err.response.status === 422) {
            console.log(err.response.data.message);
            setHasErrors(true);
            setToastMessage(err.response.data.message);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="signup">
      <h1 className="signup-title">Créer un compte</h1>
      <form onSubmit={handleSubmit(handleSignup)} className="signup-form">
        <label htmlFor='username'>Nom d'utilisateur</label>
        <input {...register('username')} name="username" className="signup-form--input" />
        <p className="signup-form--errors">{errors.username?.message}</p>

        <label htmlFor='email'>Adresse Email</label>
        <input {...register('email')} name="email" className="signup-form--input" />
        <p className="signup-form--errors">{errors.email?.message}</p>

        <label htmlFor='password'>Mot de passe</label>
        <input {...register('password')} name="password" type="password" className="signup-form--input" />
        <p className="signup-form--errors">{errors.password?.message}</p>

        <label htmlFor='repeat_password'>Répétez le mot de passe</label>
        <input {...register('repeat_password')} name="repeat_password" type="password" className="signup-form--input" />
        <p className="signup-form--errors">{errors.repeat_password?.message}</p>

        <input type="submit" value="S'inscrire" className="signup-form--btn" />
      </form>

      {hasErrors && <Toast errors={toastMessage} hasErrors={hasErrors} />}
    </div>
  );
};

export default SignupForm;
