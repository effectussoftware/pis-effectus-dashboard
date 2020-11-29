import * as React from 'react';
import { Filter, NullableBooleanInput } from 'react-admin';

import { IS_PUBLISHED } from './consts';

// Por alguna razón react-admin no está tomando en cuenta nullLabel, falseLabel ni trueLabel
const CommunicationFilter = (props) => (
  <Filter {...props}>
    <NullableBooleanInput
      source={IS_PUBLISHED}
      label="Publicado"
      nullLabel="-"
      falseLabel="No publicado"
      trueLabel="Publicado"
      alwaysOn
    />
  </Filter>
);

export default CommunicationFilter;
