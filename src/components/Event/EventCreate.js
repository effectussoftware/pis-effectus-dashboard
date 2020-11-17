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
} from 'react-admin';

import {
  NAME,
  DESCRIPTION,
  ADDRESS,
  START_TIME,
  END_TIME,
  COST,
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
        <DateTimeInput
          precise
          label="Hora de comienzo"
          source={START_TIME}
          validate={required()}
        />
        <DateTimeInput
          precise
          label="Hora de finalización"
          source={END_TIME}
          validate={required()}
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
