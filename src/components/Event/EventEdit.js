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
  BooleanInput,
  useEditController,
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
  CANCELLED,
  IS_PUBLISHED,
} from './consts';
import { NAME as USER_NAME, IS_ACTIVE as USER_IS_ACTIVE } from '../User/consts';
import DateTimeInput from '../common/DateTime';
import GuestsSelector from './GuestsSelector';
import transformInvitations from './transfomInvitations';
import NoDeleteToolbar from '../common/NoDeleteToolbar';

export const EventEdit = (props) => {
  const { record } = useEditController(props);

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
        <TextInput source={NAME} label="Nombre" validate={[required()]} />
        <TextInput
          multiline
          label="Descripción"
          source={DESCRIPTION}
          validate={[required()]}
        />
        <TextInput source={ADDRESS} label="Dirección" validate={[required()]} />
        <NumberInput source={COST} label="Costo" />
        <DateTimeInput
          precise
          label="Hora de comienzo"
          source={START_TIME}
          timeIntervals={15}
        />
        <DateTimeInput
          precise
          label="Hora de finalización"
          source={END_TIME}
          timeIntervals={15}
        />
        <BooleanInput
          source={CANCELLED}
          label="Cancelado"
          defaultValue={false}
          disabled={record[CANCELLED]}
        />
        <ArrayField source={USERS} label="Invitados">
          <SingleFieldList linkType={false}>
            <ChipField source={USER_NAME} />
          </SingleFieldList>
        </ArrayField>
        <ReferenceArrayInput
          label="Agregar invitados"
          source={INVITATIONS}
          reference={USERS}
          filter={{ [USER_IS_ACTIVE]: true }}
        >
          <GuestsSelector optionText={USER_NAME} />
        </ReferenceArrayInput>
        <BooleanInput
          source={IS_PUBLISHED}
          label="Publicar"
          defaultValue={false}
          disabled={record[IS_PUBLISHED]}
        />
      </SimpleForm>
    </Edit>
  );
};
