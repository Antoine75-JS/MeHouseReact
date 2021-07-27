import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="login">
      <h1>Connectez vous</h1>

      <Link to="/signup">Créer un compte</Link>
    </div>
  );
};

export default LoginForm;
