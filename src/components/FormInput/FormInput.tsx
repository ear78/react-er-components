import React from 'react';
import styles from './FormInput.module.scss';

type FormInputProps = {
  inputType: string;
  placeHolder: string;
  name: string;
  inputVal?: any;
  change: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
        checked={inputVal}
        onChange={change}
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
    <label htmlFor={name} className={styles.Container}>
      {labelText}
      {input}
      {inputType === 'checkbox' ? <span className={styles.Checkmark} /> : null }
    </label>
  );
}

export default FormInput;
