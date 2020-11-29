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
import { TITLE, USER_ID, USER_NAME, CREATED_AT, UPDATED_AT } from './consts';

import ReviewFilter from './ReviewFilter';

export const ReviewList = (props) => (
  <List
    sort={{ field: UPDATED_AT, order: 'DESC' }}
    filters={<ReviewFilter />}
    bulkActionButtons={<BulkDeleteButton undoable={false} />}
    title="One on One"
    {...props}
  >
    <Datagrid>
      <ReferenceField source={USER_ID} label="Usuario" reference="users">
        <TextField source={USER_NAME} />
      </ReferenceField>
      <TextField label="Título" source={TITLE} />
      <DateField label="Fecha de creación" source={CREATED_AT} />
      <DateField label="Fecha de edición" source={UPDATED_AT} />
      <EditButton />
    </Datagrid>
  </List>
);
