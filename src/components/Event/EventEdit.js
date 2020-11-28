import * as React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  useNotify,
  useRefresh,
  useRedirect,
  NumberInput,
  ReferenceArrayInput,
  BooleanInput,
  useEditController,
  SelectInput,
} from 'react-admin';

import {
  NAME,
  DESCRIPTION,
  ADDRESS,
  START_TIME,
  END_TIME,
  COST,
  CURRENCY,
  INVITATIONS,
  USERS,
  CANCELLED,
  IS_PUBLISHED,
} from './consts';
import { NAME as USER_NAME, IS_ACTIVE as USER_IS_ACTIVE } from '../User/consts';
import DateTimeInput from '../common/DateTime';
import GuestsSelector from './GuestsSelector';
import ClickableGuestList from './ClickableGuestList';
import transformInvitations from './transfomInvitations';
import NoDeleteToolbar from '../common/NoDeleteToolbar';

export const EventEdit = (props) => {
  const { record = {} } = useEditController(props);

  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify('El evento fue editado de forma exitosa');
    redirect('/events');
    refresh();
  };

  return (
    <Edit
      {...props}
      transform={transformInvitations}
      onSuccess={onSuccess}
      undoable={false}
    >
      <SimpleForm toolbar={<NoDeleteToolbar />}>
        <TextInput
          source={NAME}
          label="Nombre"
          validate={[required()]}
          disabled={record[CANCELLED]}
        />
        <TextInput
          multiline
          label="Descripción"
          source={DESCRIPTION}
          validate={[required()]}
          disabled={record[CANCELLED]}
        />
        <TextInput
          source={ADDRESS}
          label="Dirección"
          validate={[required()]}
          disabled={record[CANCELLED]}
        />
        <NumberInput source={COST} label="Costo" />
        <SelectInput
          source={CURRENCY}
          defaultValue="pesos"
          choices={[
            { id: 'pesos', name: 'Pesos' },
            { id: 'dolares', name: 'Dólares' },
          ]}
        />
        <DateTimeInput
          precise
          label="Hora de comienzo"
          source={START_TIME}
          timeIntervals={15}
          disabled={record[CANCELLED]}
        />
        <DateTimeInput
          precise
          label="Hora de finalización"
          source={END_TIME}
          timeIntervals={15}
          disabled={record[CANCELLED]}
        />
        <BooleanInput
          source={CANCELLED}
          label="Cancelado"
          defaultValue={false}
          disabled={record[CANCELLED]}
        />
        <ClickableGuestList label="Invitados" />
        <ReferenceArrayInput
          label="Agregar invitados"
          source={INVITATIONS}
          reference={USERS}
          disabled={record[CANCELLED]}
          filter={{ [USER_IS_ACTIVE]: true }}
        >
          <GuestsSelector disabled={record[CANCELLED]} optionText={USER_NAME} />
        </ReferenceArrayInput>
        <BooleanInput
          source={IS_PUBLISHED}
          label="Publicar"
          defaultValue={false}
          disabled={record[IS_PUBLISHED] || record[CANCELLED]}
        />
      </SimpleForm>
    </Edit>
  );
};
