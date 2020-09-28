import * as React from 'react';
import { Create, SimpleForm, TextInput, BooleanInput } from 'react-admin';
import { TITLE, TEXT, IS_PUBLISHED } from './consts';

export const CommunicationCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source={ TITLE } />
      <TextInput multiline source={ TEXT } />
      <BooleanInput label='Published' source={ IS_PUBLISHED } defaultValue={ false } />
    </SimpleForm>
  </Create>
);
