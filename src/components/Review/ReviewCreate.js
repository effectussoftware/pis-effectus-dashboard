import * as React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  required,
  useNotify,
  useRefresh,
  useRedirect,
} from 'react-admin';

import ActionItemListInput from './ActionItemListInput';
import {
  USER_ID,
  TITLE,
  TEXT,
  USER_ACTION_LIST,
  REVIEWER_ACTION_LIST,
  USER_NAME,
} from './consts';
import transformActionList from './transformActionList';

export const ReviewCreate = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify('La review 1o1 fue creada de forma exitosa');
    redirect('/reviews');
    refresh();
  };

  return (
    <Create onSuccess={onSuccess} transform={transformActionList} {...props}>
      <SimpleForm>
        <ReferenceInput
          source={USER_ID}
          label="Usuario"
          reference="users"
          validate={[required()]}
          filter={{ is_active: true }}
        >
          <SelectInput optionText={USER_NAME} />
        </ReferenceInput>
        <TextInput label="Título" source={TITLE} validate={[required()]} />
        <TextInput label="Texto" multiline source={TEXT} fullWidth />
        <ActionItemListInput
          source={USER_ACTION_LIST}
          disableCompleted
          label="Acciones del usuario"
        />
        <ActionItemListInput
          source={REVIEWER_ACTION_LIST}
          disableCompleted
          label="Acciones de Effectus"
        />
      </SimpleForm>
    </Create>
  );
};
