import * as React from 'react';
import DatePicker from 'react-datepicker';
import { Field } from 'react-final-form';
import 'react-datepicker/dist/react-datepicker.css';
import { TextInput } from 'react-admin';

export const MyDateTimeInput = ({ source }) => {
  const today = new Date();

  return (
    <Field name={source} initialValue={today}>
      {({ input: { value, onChange, ...input } }) => (
        <div>
          <DatePicker
            showTimeSelect
            timeIntervals={60}
            dateFormat="MMMM d, h:mm aa"
            selected={value}
            onChange={onChange}
            customInput={<TextInput />}
            {...input}
          />
        </div>
      )}
    </Field>
  );
};
