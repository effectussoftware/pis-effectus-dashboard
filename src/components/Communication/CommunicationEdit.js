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

export const CommunicationEdit = (props) => (
  <Edit transform={formImageDataToBase64} {...props}>
    <SimpleForm>
      <TextInput disable source={ID} />
      <TextInput source={TITLE} validate={[required()]} />
      <TextInput multiline source={TEXT} validate={[required()]} />
      <ImageInput source={IMAGE} label="Cambiar imagen" accept="image/*">
        <ImageField source={IMAGE} title="title" />
      </ImageInput>
      <BooleanInput label="Published" source={IS_PUBLISHED} />
    </SimpleForm>
  </Edit>
);

const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
