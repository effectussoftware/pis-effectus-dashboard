import * as React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  ImageInput,
  ImageField,
  required,
} from 'react-admin';
import { ID, TITLE, TEXT, IS_PUBLISHED, IMAGE } from './consts';

export const CommunicationEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disable source={ID} />
      <TextInput source={TITLE} validate={[required()]} />
      <TextInput multiline source={TEXT} validate={[required()]} />
      <ImageInput source={IMAGE} label="Cambiar imagen" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <BooleanInput label="Published" source={IS_PUBLISHED} />
    </SimpleForm>
  </Edit>
);
