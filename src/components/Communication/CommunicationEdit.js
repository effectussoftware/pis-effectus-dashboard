import * as React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  ImageInput,
  ImageField,
} from "react-admin";
import { ID, TITLE, TEXT, IS_PUBLISHED, IMAGE } from "./consts";

export const CommunicationEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disable source={ID} />
      <TextInput source={TITLE} />
      <TextInput multiline source={TEXT} />
      <ImageInput source={IMAGE} label="Cambiar imagen" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <BooleanInput label="Published" source={IS_PUBLISHED} />
    </SimpleForm>
  </Edit>
);
