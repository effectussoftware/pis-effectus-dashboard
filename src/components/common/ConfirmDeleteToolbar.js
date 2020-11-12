import * as React from 'react';
import { SaveButton, DeleteButton, Toolbar } from 'react-admin';
import { withStyles } from '@material-ui/core';

const toolbarStyles = {
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

const ConfirmDeleteToolbar = withStyles(toolbarStyles)((props) => (
  <Toolbar {...props}>
    <SaveButton />
    <DeleteButton undoable={false} />
  </Toolbar>
));

export default ConfirmDeleteToolbar;
