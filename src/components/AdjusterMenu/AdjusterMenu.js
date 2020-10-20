import React from 'react'
import styles from './AdjusterMenu.module.scss'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function AdjusterMenu(props) {
  return <div
          className={styles.MenuTrigger}
          onClick={props.click}>
          <FontAwesomeIcon icon={["fas", "chevron-down" ]} />
        </div>
}

export default AdjusterMenu
