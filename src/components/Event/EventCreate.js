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
  SelectArrayInput,
} from 'react-admin';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

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

const MarginLeftButton = withStyles({ root: { marginLeft: '20px' } })(Button);

const transformInvitations = ({ invitations_attributes, ...rest }) => ({
  invitations_attributes: invitations_attributes.map((id) => ({ user_id: id })),
  ...rest,
});

const withSelectAllButton = (Component) => (props) => (
  <Box display="flex" alignItems="center">
    <Component {...props} />
    <MarginLeftButton
      variant="contained"
      onClick={() => props.input.onChange(props.choices.map(({ id }) => id))}
    >
      Agregar todos
    </MarginLeftButton>
  </Box>
);

const GuestsSelector = withSelectAllButton(SelectArrayInput);

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
          <GuestsSelector optionText="name" />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
