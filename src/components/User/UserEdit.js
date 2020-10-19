import * as React from 'react';
import { Edit, SimpleForm, BooleanInput, TextInput } from 'react-admin';
import { IS_ACTIVE, IS_ADMIN, ID, EMAIL, NAME } from './consts';

import NoDeleteToolbar from '../common/NoDeleteToolbar';

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm toolbar={<NoDeleteToolbar />}>
      <TextInput disabled source={ID} />
      <TextInput disabled source={EMAIL} />
      <TextInput disabled source={NAME} />
      <BooleanInput label="Is Active" source={IS_ACTIVE} />
      <BooleanInput label="Is Admin" source={IS_ADMIN} />
    </SimpleForm>
  </Edit>
);
