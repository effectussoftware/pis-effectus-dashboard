import * as React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  ImageInput,
  ImageField,
  required,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import {
  TITLE,
  TEXT,
  IS_PUBLISHED,
  IS_RECURRENT,
  DATE_TIME,
  IMAGE,
} from './consts';
import { formImageDataToBase64 } from '../../utils';
import { MyDateTimeInput } from './MyDateTime';
import ConditionalInput from '../common/ConditionalInput';

const useStyles = makeStyles({
  card: { overflow: 'visible' },
});

export const CommunicationCreate = (props) => (
  <Create {...props} classes={useStyles()} transform={formImageDataToBase64}>
    <SimpleForm>
      <TextInput source={TITLE} validate={[required()]} />
      <TextInput multiline source={TEXT} validate={[required()]} />
      <ImageInput source={IMAGE} label="Agregar una imagen" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <BooleanInput
        label="Published"
        source={IS_PUBLISHED}
        defaultValue={false}
      />
      <BooleanInput source={IS_RECURRENT} defaultValue={false} />
      <ConditionalInput
        inputComponent={<MyDateTimeInput />}
        conditionField={IS_RECURRENT}
        source={DATE_TIME}
      />
    </SimpleForm>
  </Create>
);
