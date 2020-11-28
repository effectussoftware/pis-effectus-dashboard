import * as React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  required,
  useNotify,
  useRefresh,
  useRedirect,
  NumberInput,
  ReferenceArrayInput,
  BooleanInput,
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
  IS_PUBLISHED,
} from './consts';
import { IS_ACTIVE as USER_IS_ACTIVE } from '../User/consts';
import DateTimeInput from '../common/DateTime';
import GuestsSelector from './GuestsSelector';
import transformInvitations from './transfomInvitations';

export const EventCreate = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify('El evento fue creado de forma exitosa');
    redirect('/events');
    refresh();
  };

  return (
    <Create {...props} transform={transformInvitations} onSuccess={onSuccess}>
      <SimpleForm>
        <TextInput source={NAME} label="Nombre" validate={required()} />
        <TextInput
          multiline
          source={DESCRIPTION}
          label="Descripción"
          validate={required()}
        />
        <TextInput source={ADDRESS} label="Dirección" validate={required()} />
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
          validate={required()}
          timeIntervals={15}
        />
        <DateTimeInput
          precise
          label="Hora de finalización"
          source={END_TIME}
          validate={required()}
          timeIntervals={15}
        />
        <ReferenceArrayInput
          label="Invitados"
          source={INVITATIONS}
          reference={USERS}
          validate={required()}
          filter={{ [USER_IS_ACTIVE]: true }}
        >
          <GuestsSelector />
        </ReferenceArrayInput>
        <BooleanInput
          source={IS_PUBLISHED}
          label="Publicar"
          defaultValue={false}
        />
      </SimpleForm>
    </Create>
  );
};
