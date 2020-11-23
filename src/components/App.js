import React from 'react';
import { Admin, Resource } from 'react-admin';

import Login from './Login';

import dataProvider from '../react-admin/dataProvider';
import authProvider from '../react-admin/authProvider';

import customRoutes from '../react-admin/customRoutes';
import theme from '../react-admin/theme';

import { UserList, UserEdit } from './User';

import {
  CommunicationList,
  CommunicationCreate,
  CommunicationEdit,
} from './Communication';

import { EventCreate, EventList, EventShow, EventEdit } from './Event';

import { ReviewList, ReviewCreate, ReviewEdit } from './Review';

const App = () => (
  <Admin
    theme={theme}
    loginPage={Login}
    dataProvider={dataProvider}
    authProvider={authProvider}
    customRoutes={customRoutes}
  >
    <Resource
      name="users"
      options={{ label: 'Usuarios' }}
      list={UserList}
      edit={UserEdit}
    />
    <Resource
      name="communications"
      options={{ label: 'Comunicados' }}
      list={CommunicationList}
      create={CommunicationCreate}
      edit={CommunicationEdit}
    />
    <Resource
      name="reviews"
      options={{ label: 'One on one' }}
      list={ReviewList}
      create={ReviewCreate}
      edit={ReviewEdit}
    />
    <Resource
      name="events"
      options={{ label: 'Eventos' }}
      show={EventShow}
      edit={EventEdit}
      list={EventList}
      create={EventCreate}
    />
  </Admin>
);

export default App;
