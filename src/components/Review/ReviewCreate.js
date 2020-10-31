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
          label="usuario"
          reference="users"
          validate={[required()]}
        >
          <SelectInput optionText={USER_NAME} />
        </ReferenceInput>
        <TextInput source={TITLE} />
        <TextInput multiline source={TEXT} />
        <ActionItemListInput
          source={USER_ACTION_LIST}
          disableCompleted
          label="Employee actions"
        />
        <ActionItemListInput
          source={REVIEWER_ACTION_LIST}
          disableCompleted
          label="Effectus actions"
        />
      </SimpleForm>
    </Create>
  );
};
