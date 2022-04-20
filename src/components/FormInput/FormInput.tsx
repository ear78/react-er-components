import React from 'react';
import styles from './FormInput.module.scss';

type FormInputProps = {
  inputType: string;
  placeHolder: string;
  name: string;
  inputVal?: string;
  change: () => void;
  labelText: string;
};

function FormInput({
  inputType, placeHolder, name, inputVal, change, labelText,
}: FormInputProps) {
  let input;
  if (inputType === 'checkbox') {
    input = (
      <input
        type={inputType}
        placeholder={placeHolder}
        name={name}
        value={inputVal}
        onClick={change}
      />
    );
  } else {
    input = (
      <input
        type={inputType}
        placeholder={placeHolder}
        name={name}
        value={inputVal}
        onChange={change}
      />
    );
  }
  return (
    <label htmlFor={labelText} className={styles.Container}>
      {labelText}
      {input}
      {inputType === 'checkbox' ? <span className={styles.Checkmark} /> : null }
    </label>
  );
}

export default FormInput;
