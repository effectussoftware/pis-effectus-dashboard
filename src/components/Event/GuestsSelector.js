import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const MarginLeftButton = withStyles({ root: { marginLeft: '20px' } })(Button);

const GuestsSelector = ({ choices, input }) => (
  <Box display="flex" alignItems="flex-start">
    <Autocomplete
      multiple
      style={{ width: 260 }}
      options={choices}
      value={input?.value || []}
      onChange={(_, values) => input.onChange(values)}
      getOptionLabel={({ name }) => name}
      renderInput={(params) => (
        <TextField {...params} variant="standard" label="Invitados" />
      )}
    />
    <MarginLeftButton
      variant="contained"
      onClick={() => input.onChange(choices)}
    >
      Agregar todos
    </MarginLeftButton>
    <MarginLeftButton variant="contained" onClick={() => input.onChange([])}>
      Quitar todos
    </MarginLeftButton>
  </Box>
);

export default GuestsSelector;
