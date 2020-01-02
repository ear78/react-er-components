import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.scss'

import logo from '../../assets/img/er-logo.svg'

function nav() {

  return (
    <div className={styles.NavContainer}>
      <div>
        <img  src={logo} alt="ER Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/page-banner'>Page Banner</Link>
          </li>
          <li>
            <Link to='/hover-pods'>Hover Pods</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default nav
