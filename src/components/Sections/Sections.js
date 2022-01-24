import React from "react";
import PropTypes from 'prop-types';
import styles from './Sections.module.scss';

const Sections = React.forwardRef(( props, ref ) => {
  return props.data.map((d, i) => {
    return <section
            key={d.id}
            ref={ref[i]}
            className={(i % 2 !== 0) ? styles.RefReverse : styles.RefSection}>
            <div
              className={styles.BgImage}
              style={{backgroundImage: `url(${d.img})`}}></div>
            <div className={styles.TextBox}>{d.text}</div>
          </section>
  })
})

Sections.propTypes = {
  data: PropTypes.array,
  refs: PropTypes.array
}

export default Sections;