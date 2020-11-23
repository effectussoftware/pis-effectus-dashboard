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
import ConditionalEditButton from '../common/ConditionalEditButton';

import BulkActionButtons from './BulkActionButtons';

import CommunicationFilter from './CommunicationFilter';

export const CommunicationList = (props) => (
  <List
    bulkActionButtons={<BulkActionButtons />}
    filters={<CommunicationFilter />}
    {...props}
  >
    <Datagrid>
      <TextField source={ID} />
      <TextField source={TITLE} />
      <BooleanField source={IS_PUBLISHED} />
      <DateField
        source={DATE_TIME}
        options={{
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        }}
        showTime
      />
      <DateField source={CREATED_AT} />
      <DateField source={UPDATED_AT} />
      <ConditionalEditButton conditionalField={IS_PUBLISHED} />
    </Datagrid>
  </List>
);
