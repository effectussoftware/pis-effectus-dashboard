import React from 'react';
import GoogleLogin from 'react-google-login';
import { useLogin } from 'react-admin';

import './Login.css';

const Login = () => {
  const login = useLogin();

  return (
    <div className="login-container">
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        onSuccess={login}
      />
    </div>
  );
};

export default Login;
