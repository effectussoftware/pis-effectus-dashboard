import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  BooleanField,
  EditButton,
} from "react-admin";
import { ID, EMAIL, NAME, IS_ACTIVE, IS_ADMIN } from "./consts";

export const UserList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source={ID} />
      <EmailField source={EMAIL} />
      <TextField source={NAME} />
      <BooleanField source={IS_ACTIVE} />
      <BooleanField source={IS_ADMIN} />
      <EditButton />
    </Datagrid>
  </List>
);
