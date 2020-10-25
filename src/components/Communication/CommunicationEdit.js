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

import { formImageDataToBase64 } from '../../utils';
import { ID, TITLE, TEXT, IS_PUBLISHED, IMAGE } from './consts';

const MyImageField = ({ record }) => {
  const new_record = typeof record !== 'string';
  return new_record ? (
    <ImageField source="src" record={record} title="title" />
  ) : (
    <ImageField source="image" record={{ image: record }} title="title" />
  );
};

export const CommunicationEdit = (props) => (
  <Edit transform={formImageDataToBase64} {...props}>
    <SimpleForm>
      <TextInput disable source={ID} />
      <TextInput source={TITLE} validate={[required()]} />
      <TextInput multiline source={TEXT} validate={[required()]} />
      <ImageInput source={IMAGE} label="Cambiar imagen" accept="image/*">
        <MyImageField />
      </ImageInput>
      <BooleanInput label="Published" source={IS_PUBLISHED} />
    </SimpleForm>
  </Edit>
);
