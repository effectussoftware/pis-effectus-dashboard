import * as React from 'react';
import { Filter, ReferenceInput, SelectInput } from 'react-admin';

import { USER_ID, USER_NAME } from './consts';

// Por alguna razón react-admin no está tomando en cuenta nullLabel, falseLabel ni trueLabel
const ReviewFilter = (props) => (
  <Filter {...props}>
    <ReferenceInput source={USER_ID} label="usuario" reference="users" alwaysOn>
      <SelectInput optionText={USER_NAME} />
    </ReferenceInput>
  </Filter>
);

export default ReviewFilter;
