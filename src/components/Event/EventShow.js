import * as React from 'react';
import {
  Show,
  TabbedShowLayout,
  TextField,
  DateField,
  NumberField,
  ArrayField,
  Datagrid,
  EmailField,
  BooleanField,
  ImageField,
  Tab,
} from 'react-admin';

import {
  ID,
  NAME,
  ADDRESS,
  START_TIME,
  END_TIME,
  COST,
  CANCELLED,
} from './consts';
import { DESCRIPTION } from '../Review/consts';

export const EventShow = (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Info">
        <TextField source={ID} />
        <DateField source={NAME} />
        <TextField source={DESCRIPTION} />
        <TextField source={ADDRESS} />
        <DateField source={START_TIME} />
        <DateField source={END_TIME} />
        <NumberField source={COST} />
        <BooleanField source={CANCELLED} />
      </Tab>
      <Tab label="Invitados">
        <ArrayField source="users">
          <Datagrid>
            <EmailField source="email" />
            <TextField source="name" />
            <ImageField source="picture" />
          </Datagrid>
        </ArrayField>
      </Tab>
    </TabbedShowLayout>
  </Show>
);
