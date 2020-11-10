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
  SelectArrayInput,
} from 'react-admin';

import {
  NAME,
  DESCRIPTION,
  ADDRESS,
  START_TIME,
  END_TIME,
  COST,
  INVITATIONS_ATTRIBUTES,
} from './consts';
import DateTimeInput from '../common/DateTime';

const transformInvitations = ({ invitations_attributes, ...rest }) => ({
  invitations_attributes: invitations_attributes.map((id) => ({ user_id: id })),
  ...rest,
});

export const EventEdit = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify('El evento fue creado de forma exitosa');
    redirect('/events');
    refresh();
  };

  return (
    <Edit {...props} transform={transformInvitations} onSuccess={onSuccess}>
      <SimpleForm>
        <TextInput source={NAME} validate={[required()]} />
        <TextInput multiline source={DESCRIPTION} validate={[required()]} />
        <TextInput source={ADDRESS} validate={[required()]} />
        <NumberInput source={COST} />
        <DateTimeInput precise label="Start time" source={START_TIME} />
        <DateTimeInput precise label="End time" source={END_TIME} />
        <ReferenceArrayInput
          label="Invitados"
          source={INVITATIONS_ATTRIBUTES}
          reference="users"
        >
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
