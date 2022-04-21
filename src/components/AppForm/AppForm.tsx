import React from 'react';
import styles from './AppForm.module.scss';
import FormInput from '../FormInput/FormInput';

type AppFormProps = {
  formData: {}[];
};

function AppForm({ formData }: AppFormProps) {
  const input = formData.map((d: any) => (
    <FormInput
      key={d.name}
      labelText={d.labelText}
      inputType={d.inputType}
      name={d.name}
      change={d.change}
      placeHolder={d.placeHolder}
    />
  ));
  return <form className={styles.AppForm}>{input}</form>;
}

export default AppForm;
