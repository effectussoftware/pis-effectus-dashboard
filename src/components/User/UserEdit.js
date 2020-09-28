import * as React from 'react';
import { Edit, SimpleForm, TextInput, BooleanInput } from 'react-admin';
import { ID, EMAIL, NAME, IS_ACTIVE, IS_ADMIN } from './consts';

export const UserEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disable source={ ID } />
      <TextInput disable source={ EMAIL } />
      <TextInput disable source={ NAME } />
      <BooleanInput label='Is Active' source={ IS_ACTIVE } />
      <BooleanInput label='Is Admin' source={ IS_ADMIN } />
    </SimpleForm>
  </Edit>
);
