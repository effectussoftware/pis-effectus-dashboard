import * as React from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Field } from 'react-final-form';

export const MyDateTimeInput = ({ source }) => {
  const today = new Date();

  return (
    <Field name={source} initialValue={today}>
      {({ input }) => (
        <div>
          <DateTimePicker {...input} />
        </div>
      )}
    </Field>
  );
};
