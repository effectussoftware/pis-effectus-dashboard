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
  ArrayField,
  SingleFieldList,
  ChipField,
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
} from './consts';
import { NAME as USER_NAME } from '../User/consts';
import DateTimeInput from '../common/DateTime';
import GuestsSelector from './GuestsSelector';
import transformInvitations from './transfomInvitations';

export const EventEdit = (props) => {
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
      <SimpleForm>
        <TextInput source={NAME} label="Nombre" validate={[required()]} />
        <TextInput
          multiline
          label="Descripción"
          source={DESCRIPTION}
          validate={[required()]}
        />
        <TextInput source={ADDRESS} label="Dirección" validate={[required()]} />
        <NumberInput source={COST} label="Costo" />
        <DateTimeInput precise label="Hora de comienzo" source={START_TIME} />
        <DateTimeInput precise label="Hora de finalización" source={END_TIME} />
        <ArrayField source={USERS} label="Invitados">
          <SingleFieldList linkType={false}>
            <ChipField source={USER_NAME} />
          </SingleFieldList>
        </ArrayField>
        <ReferenceArrayInput
          label="Agregar invitados"
          source={INVITATIONS}
          reference={USERS}
        >
          <GuestsSelector optionText={USER_NAME} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
