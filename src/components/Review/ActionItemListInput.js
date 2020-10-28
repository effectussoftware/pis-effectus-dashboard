import * as React from 'react';
import {
  ArrayInput,
  SimpleFormIterator,
  TextInput,
  BooleanInput,
  required,
} from 'react-admin';

import { DESCRIPTION, COMPLETED } from './consts';

const ActionItemListInput = ({
  source,
  label,
  disableAdd,
  disableRemove,
  disableCompleted,
}) => {
  return (
    <ArrayInput source={source} label={label}>
      <SimpleFormIterator disableAdd={disableAdd} disableRemove={disableRemove}>
        <TextInput
          source={DESCRIPTION}
          label="description"
          validate={[required()]}
        />
        <BooleanInput
          disabled={disableCompleted}
          source={COMPLETED}
          label="completed"
          defaultValue={false}
        />
      </SimpleFormIterator>
    </ArrayInput>
  );
};

export default ActionItemListInput;
