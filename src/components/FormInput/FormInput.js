import React from 'react'
import styles from './FormInput.module.scss'

function FormInput(props) {
  return <label>
          {props.labelText}
          <input type={props.inputType}
            placeholder={props.placeHolder}
            onChange={props.change}/>
        </label>
}

export default FormInput
