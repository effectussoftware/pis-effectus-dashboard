import React from 'react';
import GoogleLogin from 'react-google-login';
import { useLogin } from 'react-admin';

const Login = () => {
  const login = useLogin();

  return (
    <GoogleLogin clientId={process.env.REACT_APP_CLIENT_ID} onSuccess={login} />
  );
};

export default Login;
