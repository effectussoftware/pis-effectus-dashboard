import * as React from 'react';
import { ImageField } from 'react-admin';

const MyImageField = ({ record, source }) => {
  const new_record = typeof record !== 'string' ? record : { [source]: record };
  return (
    <ImageField source={source} record={new_record} title="title" />
  );
};

export default MyImageField;
