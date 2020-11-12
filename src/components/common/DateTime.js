import * as React from 'react';
import DatePicker from 'react-datepicker';
import { Field } from 'react-final-form';
import 'react-datepicker/dist/react-datepicker.css';
import { TextInput } from 'react-admin';

const DateTimeInput = ({ source, label, initialValue, ...props }) => (
  <Field name={source} {...props}>
    {({ input: { value, ...input } }) => (
      <div>
        <DatePicker
          showTimeSelect
          timeIntervals={60}
          dateFormat="MMMM d, h:mm aa"
          selected={value ? new Date(value) : new Date()}
          customInput={<TextInput label={label} />}
          {...input}
        />
      </div>
    )}
  </Field>
);

export default DateTimeInput;
