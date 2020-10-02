import * as React from 'react';
import { List, Datagrid, TextField, BooleanField, DateField, EditButton } from 'react-admin';
import { ID, TITLE, IS_PUBLISHED, CREATED_AT, UPDATED_AT } from './consts';

export const CommunicationList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source={ ID } />
      <TextField source={ TITLE } />
      <BooleanField source={ IS_PUBLISHED } />
      <DateField source={ CREATED_AT } />
      <DateField source={ UPDATED_AT } />
      <EditButton />
    </Datagrid>
  </List>
);
