import * as React from 'react';
import {
  List,
  Datagrid,
  ReferenceField,
  TextField,
  DateField,
  EditButton,
  BulkDeleteButton,
} from 'react-admin';
import { TITLE, USER_ID, USER_NAME, CREATED_AT } from './consts';

import ReviewFilter from './ReviewFilter';

export const ReviewList = (props) => (
  <List
    filters={<ReviewFilter />}
    bulkActionButtons={<BulkDeleteButton undoable={false} />}
    {...props}
  >
    <Datagrid>
      <ReferenceField source={USER_ID} label="User" reference="users">
        <TextField source={USER_NAME} />
      </ReferenceField>
      <TextField source={TITLE} />
      <DateField source={CREATED_AT} />
      <EditButton />
    </Datagrid>
  </List>
);
