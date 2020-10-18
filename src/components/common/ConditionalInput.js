import { cloneElement, useEffect } from 'react';
import { useInput } from 'react-admin';
import { useFormState } from 'react-final-form';

const ConditionalInput = ({ inputComponent, conditionField, ...props }) => {
  const {
    input: { onChange },
  } = useInput(props);
  const { values } = useFormState();
  useEffect(() => {
    !values[conditionField] && onChange();
  }, [conditionField, onChange, props.source, values]);
  return values[conditionField]
    ? cloneElement(inputComponent, { ...props })
    : null;
};

export default ConditionalInput;
