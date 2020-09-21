import React from 'react';
import { Admin, Resource } from 'react-admin';

import Login from './components/Login';

import dataProvider from './dataProvider';
import authProvider from './authProvider';

const App = () => (
  <Admin
    loginPage={Login}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource name="posts" />
  </Admin>
);

export default App;
