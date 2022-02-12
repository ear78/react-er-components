import React from 'react'
import styles from './FormInput.module.scss'

function FormInput(props) {
  let input
  if(props.inputType === 'checkbox') {
    input = <input type={props.inputType}
      placeholder={props.placeHolder}
      name={props.name}
      value={props.inputVal}
      onClick={props.change}/>
  } else {
    input = <input type={props.inputType}
      placeholder={props.placeHolder}
      name={props.name}
      value={props.inputVal}
      onChange={props.change}/>
  }
  return <label className={styles.Container}>
          {props.labelText}
          {input}
          {props.inputType === 'checkbox' ? <span className={styles.Checkmark}></span> : null }
        </label>
}

export default FormInput
