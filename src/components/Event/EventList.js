import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  BooleanField,
} from 'react-admin';

import { NAME, ADDRESS, START_TIME, END_TIME, COST, CANCELLED } from './consts';
import EventListActions from './EventListActions';
import ConditionalEditButton from '../common/ConditionalEditButton';

export const EventList = (props) => (
  <List bulkActionButtons={false} actions={<EventListActions />} {...props}>
    <Datagrid rowClick="show">
      <TextField source={NAME} />
      <TextField source={ADDRESS} />
      <DateField source={START_TIME} />
      <DateField source={END_TIME} />
      <NumberField source={COST} />
      <BooleanField source={CANCELLED} />
      <ConditionalEditButton conditionalField={CANCELLED} />
    </Datagrid>
  </List>
);
