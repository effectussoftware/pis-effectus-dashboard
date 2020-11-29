import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  BooleanField,
  EditButton,
} from 'react-admin';
import { ID, EMAIL, NAME, IS_ACTIVE, IS_ADMIN } from './consts';

export const UserList = (props) => (
  <List {...props} title="Usuarios">
    <Datagrid>
      <TextField source={ID} />
      <EmailField source={EMAIL} />
      <TextField label="Nombre" source={NAME} />
      <BooleanField label="Activo" source={IS_ACTIVE} />
      <BooleanField label="Administrador" source={IS_ADMIN} />
      <EditButton />
    </Datagrid>
  </List>
);
