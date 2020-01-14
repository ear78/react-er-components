import React from 'react'
import { NavLink } from 'react-router-dom'
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
            <NavLink exact to='/'
              activeClassName={styles.selected}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/page-banner'
              activeClassName={styles.selected}>Page Banner</NavLink>
          </li>
          <li>
            <NavLink to='/hover-pods'
              activeClassName={styles.selected}>Hover Pods</NavLink>
          </li>
          <li>
            <NavLink to='/team-building'
              activeClassName={styles.selected}>Team Building</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default nav
