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
  CURRENCY,
  IS_PUBLISHED,
} from './consts';
import { DESCRIPTION } from '../Review/consts';

export const EventShow = (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Info">
        <TextField source={ID} />
        <DateField label="Nombre" source={NAME} />
        <TextField label="Descripción" source={DESCRIPTION} />
        <TextField label="Dirección" source={ADDRESS} />
        <DateField label="Hora de comienzo" source={START_TIME} />
        <DateField label="Hora de finalización" source={END_TIME} />
        <NumberField label="Costo" source={COST} />
        <TextField label="Moneda" source={CURRENCY} />
        <BooleanField label="Cancelado" source={CANCELLED} />
        <BooleanField label="Publicado" source={IS_PUBLISHED} />
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
