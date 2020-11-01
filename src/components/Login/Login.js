import React from 'react';
import GoogleLogin from 'react-google-login';
import { useLogin, useNotify, Notification } from 'react-admin';

import './Login.css';

const Login = ({ theme }) => {
  const login = useLogin();
  const notify = useNotify();

  const onSuccess = async (googleUser) => {
    try {
      await login(googleUser);
    } catch (error) {
      notify(error.message || 'Something went wrong.');
    }
  };

  return (
    <>
      <div className="login-container">
        <GoogleLogin
          clientId={process.env.REACT_APP_CLIENT_ID}
          onSuccess={onSuccess}
          onFailure={console.log}
        />
      </div>
      <Notification />
    </>
  );
};

export default Login;
