import * as React from 'react';
import { Edit, SimpleForm, TextInput, DateInput, BooleanInput } from 'react-admin';
import { ID, TITLE, TEXT, IS_PUBLISHED, CREATED_AT, UPDATED_AT } from './consts';

export const CommunicationEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disable source={ ID } />
      <TextInput source={ TITLE } />
      <TextInput multiline source={ TEXT } />
      <BooleanInput label='Published' source={ IS_PUBLISHED } />
      <DateInput disable source={ CREATED_AT } />
      <DateInput disable source={ UPDATED_AT } />
    </SimpleForm>
  </Edit>
);
