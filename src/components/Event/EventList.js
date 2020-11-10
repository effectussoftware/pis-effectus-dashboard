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

export const EventList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source={NAME} />
      <TextField source={ADDRESS} />
      <DateField source={START_TIME} />
      <DateField source={END_TIME} />
      <NumberField source={COST} />
      <BooleanField source={CANCELLED} />
    </Datagrid>
  </List>
);
