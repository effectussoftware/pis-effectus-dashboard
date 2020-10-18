import React from 'react';
import { Admin, Resource } from 'react-admin';

import Login from './Login';

import dataProvider from '../react-admin/dataProvider';
import authProvider from '../react-admin/authProvider';

import theme from '../react-admin/theme';

import { UserList, UserEdit } from './User';

import { CommunicationList, CommunicationCreate, CommunicationEdit } from './Communication';

const App = () => (
  <Admin
    theme={theme}
    loginPage={Login}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource name="users" list={UserList} edit={UserEdit} />
    <Resource name="communications" list={CommunicationList} create={CommunicationCreate} edit={CommunicationEdit} />
  </Admin>
);

export default App;
