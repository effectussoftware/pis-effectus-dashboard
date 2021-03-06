import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useFormState } from 'react-final-form';

const MarginLeftButton = withStyles({ root: { marginLeft: '20px' } })(Button);

const GuestsSelector = ({
  required,
  choices,
  input,
  disabled,
  meta: { error, touched },
}) => {
  const { values } = useFormState();
  const filteredChoices = choices.filter(
    ({ id }) => !values.users?.some(({ id: invitedId }) => id === invitedId)
  );
  return (
    <Box display="flex" alignItems="flex-start">
      <Autocomplete
        disabled={disabled}
        multiple
        style={{ width: 260 }}
        options={filteredChoices}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={(input?.value || []).filter(({ _destroy }) => !_destroy)}
        onChange={(_, values) => input.onChange(values)}
        getOptionLabel={({ name }) => name}
        renderInput={(params) => (
          <TextField
            {...params}
            error={touched && error}
            variant="standard"
            label="Invitar"
            required={required}
          />
        )}
      />
      {!disabled && (
        <>
          <MarginLeftButton
            variant="contained"
            onClick={() => input.onChange(filteredChoices)}
          >
            Agregar todos
          </MarginLeftButton>
          <MarginLeftButton
            variant="contained"
            onClick={() => input.onChange([])}
          >
            Quitar todos
          </MarginLeftButton>
        </>
      )}
    </Box>
  );
};

export default GuestsSelector;
