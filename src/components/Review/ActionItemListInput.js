import * as React from 'react';
import { ArrayInput, TextInput, BooleanInput, required } from 'react-admin';
import { useFormState, useForm } from 'react-final-form';

import ActionItemIterator from './ActionItemIterator';
import { DESCRIPTION, COMPLETED } from './consts';

const ActionItemListInput = ({ source, label, disableCompleted, isEdit }) => {
  const { values } = useFormState();
  const { registerField, change } = useForm();

  const handleRemove = (id, source) => {
    const fieldName = `${source}_toDestroy`;
    const toDestroy = values[fieldName];
    if (!toDestroy) {
      registerField(fieldName, () => {}, {});
      change(fieldName, [id]);
    } else {
      change(fieldName, [...toDestroy, id]);
    }
  };

  return (
    <ArrayInput source={source} label={label}>
      <ActionItemIterator handleRemove={isEdit ? handleRemove : undefined}>
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
      </ActionItemIterator>
    </ArrayInput>
  );
};

export default ActionItemListInput;
