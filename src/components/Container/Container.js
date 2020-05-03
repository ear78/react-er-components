import React from 'react'
import styles from './Container.module.scss'

const Container = (props) => {
  return (
    <section className={styles.Container}>
      {props.children}
    </section>
  )
}

export default Container
