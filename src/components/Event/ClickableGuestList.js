import React, { useState } from 'react';
import { ArrayField, SingleFieldList, ChipField } from 'react-admin';
import Chip from '@material-ui/core/Chip';
import { useField, useFormState } from 'react-final-form';
import { withStyles } from '@material-ui/core/styles';

import { USERS, INVITATIONS, IS_PUBLISHED } from './consts';
import { NAME as USER_NAME } from '../User/consts';

const MarginChip = withStyles({
  root: { marginRight: '.5rem', marginBottom: '.2rem' },
})(Chip);

const DeleteChip = ({
  onDelete,
  onCancelDelete,
  record: { name, invitation_id },
}) => {
  const [toDelete, setToDelete] = useState(false);

  return (
    <MarginChip
      variant={toDelete ? undefined : 'outlined'}
      color={toDelete ? 'secondary' : undefined}
      onDelete={() => {
        toDelete ? onCancelDelete(invitation_id) : onDelete(invitation_id);
        setToDelete(!toDelete);
      }}
      label={name}
    />
  );
};

const ClickableGuestList = ({ ...props }) => {
  const {
    input: { value = [], onChange },
  } = useField(INVITATIONS);
  const { values } = useFormState();

  const onDelete = (id) => {
    onChange([...value, { id, _destroy: true }]);
  };

  const onCancelDelete = (selectedId) => {
    onChange(value.filter(({ id }) => id !== selectedId));
  };

  return (
    <ArrayField source={USERS} {...props}>
      <SingleFieldList linkType={false}>
        {values[IS_PUBLISHED] ? (
          <ChipField source={USER_NAME} />
        ) : (
          <DeleteChip onDelete={onDelete} onCancelDelete={onCancelDelete} />
        )}
      </SingleFieldList>
    </ArrayField>
  );
};

export default ClickableGuestList;
