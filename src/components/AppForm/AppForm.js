import React from 'react'
import styles from './AppForm.module.scss'
import FormInput from '../FormInput/FormInput'

function AppForm(props) {
  let input = props.formData.map((d, i) => {
    return <FormInput key={i}
      labelText={d.labelText}
      type={d.inputType}
      change={d.change}
      placeholder={d.placeHolder}/>
  })
  return <form className={styles.AppForm}>{input}</form>
}

export default AppForm
