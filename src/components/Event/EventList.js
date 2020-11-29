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
  CURRENCY,
} from './consts';
import EventListActions from './EventListActions';

export const EventList = (props) => (
  <List
    sort={{ field: UPDATED_EVENT_AT, order: 'DESC' }}
    bulkActionButtons={false}
    actions={<EventListActions />}
    title="Eventos"
    {...props}
  >
    <Datagrid rowClick="show">
      <TextField label="Nombre" source={NAME} />
      <TextField label="Dirección" source={ADDRESS} />
      <DateField
        source={START_TIME}
        options={{
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        }}
        showTime
        label="Hora de comienzo"
      />
      <DateField
        source={END_TIME}
        options={{
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        }}
        showTime
        label="Hora de finalización"
      />
      <DateField
        source={UPDATED_EVENT_AT}
        options={{
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        }}
        showTime
        label="Fecha de edición"
      />
      <NumberField label="Costo" source={COST} />
      <TextField label="Moneda" source={CURRENCY} />
      <BooleanField label="Cancelado" source={CANCELLED} />
      <BooleanField label="Publicado" source={IS_PUBLISHED} />
      <EditButton />
    </Datagrid>
  </List>
);
