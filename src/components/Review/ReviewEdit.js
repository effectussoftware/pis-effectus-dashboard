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
} from './consts';
import { NAME as USER_NAME } from '../User/consts';
import transformActionList from './transformActionList';
import ConfirmDeleteToolbar from '../common/ConfirmDeleteToolbar';

export const ReviewEdit = (props) => (
  <Edit transform={transformActionList} {...props}>
    <SimpleForm toolbar={<ConfirmDeleteToolbar />}>
      <ReferenceInput
        disabled
        source={USER_ID}
        label="usuario"
        reference="users"
      >
        <SelectInput optionText={USER_NAME} />
      </ReferenceInput>
      <ReferenceInput
        disabled
        source={REVIEWER_ID}
        label="reviewer"
        reference="users"
      >
        <SelectInput optionText={USER_NAME} />
      </ReferenceInput>
      <TextInput disabled source={TITLE} />
      <TextInput multiline source={TEXT} fullWidth />
      <ActionItemListInput
        isEdit
        source={USER_ACTION_LIST}
        label="Employee actions"
      />
      <ActionItemListInput
        isEdit
        source={REVIEWER_ACTION_LIST}
        label="Effectus actions"
      />
    </SimpleForm>
  </Edit>
);
