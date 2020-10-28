import * as React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
} from 'react-admin';

import ActionItemListInput from './ActionItemListInput';
import {
  USER_ID,
  REVIEWER_ID,
  TITLE,
  TEXT,
  USER_ACTION_LIST,
  REVIEWER_ACTION_LIST,
  USER_NAME,
} from './consts';
import transformActionList from './transformActionList';

export const ReviewEdit = (props) => (
  <Edit transform={transformActionList} {...props}>
    <SimpleForm>
      <ReferenceInput
        disable
        source={USER_ID}
        label="usuario"
        reference="users"
      >
        <SelectInput optionText={USER_NAME} />
      </ReferenceInput>
      <ReferenceInput
        disable
        source={REVIEWER_ID}
        label="reviewer"
        reference="users"
      >
        <SelectInput optionText={USER_NAME} />
      </ReferenceInput>
      <TextInput source={TITLE} />
      <TextInput multiline source={TEXT} />
      <ActionItemListInput source={USER_ACTION_LIST} label="Employee actions" />
      <ActionItemListInput
        source={REVIEWER_ACTION_LIST}
        label="Effectus actions"
      />
    </SimpleForm>
  </Edit>
);
