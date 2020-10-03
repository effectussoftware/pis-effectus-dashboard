import * as React from 'react';
import { SaveButton, Toolbar } from 'react-admin';

const NoDeleteToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

export default NoDeleteToolbar;
