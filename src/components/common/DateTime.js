import * as React from 'react';
import DatePicker from 'react-datepicker';
import { Field } from 'react-final-form';
import 'react-datepicker/dist/react-datepicker.css';
import { TextInput } from 'react-admin';

const DateTimeInput = ({ source, label, precise, ...props }) => {
  const today = new Date();

  return (
    <Field name={source} initialValue={today} {...props}>
      {({ input: { value, onChange, ...input } }) => (
        <div>
          <DatePicker
            showTimeSelect
            timeIntervals={precise ? 5 : 60}
            dateFormat="MMMM d, h:mm aa"
            selected={new Date(value)}
            onChange={onChange}
            customInput={<TextInput label={label} />}
            {...input}
          />
        </div>
      )}
    </Field>
  );
};

export default DateTimeInput;
