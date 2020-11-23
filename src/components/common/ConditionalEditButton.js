import React from 'react';
import { EditButton } from 'react-admin';

const ConditionalEditButton = (props) => {
  const { record, conditionalField } = props;
  return <EditButton disabled={record?.[conditionalField]} {...props} />;
};

export default ConditionalEditButton;
