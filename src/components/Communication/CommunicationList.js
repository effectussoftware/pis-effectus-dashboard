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
    sort={{ field: UPDATED_AT, order: 'DESC' }}
    bulkActionButtons={<BulkActionButtons />}
    filters={<CommunicationFilter />}
    title="Comunicados"
    {...props}
  >
    <Datagrid>
      <TextField source={ID} />
      <TextField label="Título" source={TITLE} />
      <BooleanField label="Publicado" source={IS_PUBLISHED} />
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
        label="Fecha de recurrencia"
      />
      <DateField label="Fecha de creación" source={CREATED_AT} />
      <DateField label="Fecha de edición" source={UPDATED_AT} />
      <ConditionalEditButton conditionalField={IS_PUBLISHED} />
    </Datagrid>
  </List>
);
