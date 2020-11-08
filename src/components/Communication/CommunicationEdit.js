import * as React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  ImageInput,
  required,
} from 'react-admin';

import { formImageDataToBase64 } from '../../utils';
import { ID, TITLE, TEXT, IS_PUBLISHED, IMAGE } from './consts';
import MyImageField from './MyImageField';
import ConfirmDeleteToolbar from '../common/ConfirmDeleteToolbar';

export const CommunicationEdit = (props) => (
  <Edit undoable={false} transform={formImageDataToBase64} {...props}>
    <SimpleForm toolbar={<ConfirmDeleteToolbar />}>
      <TextInput disable source={ID} />
      <TextInput source={TITLE} validate={[required()]} />
      <TextInput multiline source={TEXT} validate={[required()]} />
      <ImageInput source={IMAGE} label="Cambiar imagen" accept="image/*">
        <MyImageField source="src" />
      </ImageInput>
      <BooleanInput label="Published" source={IS_PUBLISHED} />
    </SimpleForm>
  </Edit>
);
