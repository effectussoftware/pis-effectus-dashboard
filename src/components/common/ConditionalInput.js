import { cloneElement, useEffect } from 'react';
import { useInput } from 'react-admin';
import { useFormState } from 'react-final-form';

const ConditionalInput = ({
  inputComponent,
  conditionField,
  conditionValue,
  ...props
}) => {
  const {
    input: { onChange },
  } = useInput(props);
  const { values } = useFormState();
  useEffect(() => {
    !values[conditionField] && !conditionValue && onChange();
  }, [conditionField, conditionValue, onChange, props.source, values]);
  return values[conditionField] || conditionValue
    ? cloneElement(inputComponent, { ...props })
    : null;
};

export default ConditionalInput;
