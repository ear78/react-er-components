import React from 'react'
import PropTypes from 'prop-types'
import styles from './Container.module.scss'

const Container = (props) => {
  return (
    <section style={{ display: props.display,
        padding: props.padding,
        background: props.background }}
        className={styles.Container}>
      {props.children}
    </section>
  )
}

Container.defaultProps = {
  display: 'flex',
  padding: '40px 15px 75px',
  background: 'inherit'
}

Container.propTypes = {
  display: PropTypes.string,
  padding: PropTypes.string,
  background: PropTypes.string
}

export default Container
