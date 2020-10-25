import * as React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  ImageInput,
  ImageField,
  required,
  useNotify,
  useRefresh,
  useRedirect,
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

export const CommunicationCreate = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify("El comunicado fue creado de forma exitosa")
    redirect("/communications");
    refresh();
  };

  return (
  <Create {...props} classes={useStyles()} transform={formImageDataToBase64} onSuccess={onSuccess} >
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
)};
