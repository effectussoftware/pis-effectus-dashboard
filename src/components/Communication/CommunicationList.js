import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  DateField,
} from 'react-admin';

import {
  ID,
  TITLE,
  IS_PUBLISHED,
  DATE_TIME,
  CREATED_AT,
  UPDATED_AT,
} from './consts';
import EditButton from './EditButton';

import BulkActionButtons from './BulkActionButtons';

import CommunicationFilter from './CommunicationFilter';

export const CommunicationList = (props) => (
  <List bulkActionButtons={<BulkActionButtons />} filters={<CommunicationFilter />} {...props}>
    <Datagrid>
      <TextField source={ID} />
      <TextField source={TITLE} />
      <BooleanField source={IS_PUBLISHED} />
      <DateField source={DATE_TIME} />
      <DateField source={CREATED_AT} />
      <DateField source={UPDATED_AT} />
      <EditButton />
    </Datagrid>
  </List>
);
