import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  BooleanField,
  EditButton,
} from 'react-admin';

import {
  NAME,
  ADDRESS,
  START_TIME,
  END_TIME,
  COST,
  CANCELLED,
  UPDATED_EVENT_AT,
  IS_PUBLISHED,
} from './consts';
import EventListActions from './EventListActions';

export const EventList = (props) => (
  <List
    sort={{ field: UPDATED_EVENT_AT, order: 'DESC' }}
    bulkActionButtons={false}
    actions={<EventListActions />}
    {...props}
  >
    <Datagrid rowClick="show">
      <TextField source={NAME} />
      <TextField source={ADDRESS} />
      <DateField source={START_TIME} />
      <DateField source={END_TIME} />
      <DateField source={UPDATED_EVENT_AT} />
      <NumberField source={COST} />
      <BooleanField source={CANCELLED} />
      <BooleanField source={IS_PUBLISHED} />
      <EditButton />
    </Datagrid>
  </List>
);
