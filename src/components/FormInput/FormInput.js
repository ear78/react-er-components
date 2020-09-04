import React from 'react'
import styles from './FormInput.module.scss'

function FormInput(props) {
  let input
  if(props.inputType === 'checkbox') {
    input = <input type={props.inputType}
      placeholder={props.placeHolder}
      onClick={props.change}/>
  } else {
    input = <input type={props.inputType}
      placeholder={props.placeHolder}
      onChange={props.change}/>
  }
  return <label>
          {props.labelText}
          {input}
        </label>
}

export default FormInput
