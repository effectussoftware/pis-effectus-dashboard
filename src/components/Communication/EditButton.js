import React from "react";
import { EditButton } from "react-admin";
import { IS_PUBLISHED } from "./consts";

const CommunicationsEditButton = (props) => {
  const { record } = props;
  return <EditButton disabled={record[IS_PUBLISHED]} {...props} />;
};

export default CommunicationsEditButton;
