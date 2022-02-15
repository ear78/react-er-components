import React from 'react'
import styles from './PageTitle.module.scss'

type PageTitleProps = {
  alt?: boolean;
  color?: string;
  title: string;
}

function PageTitle( { alt, color, title }: PageTitleProps ) {
  let alternateStyle = alt ? styles.Alt : ''

  return ( <h1 style={{color: color}} className={`${styles.PageTitle} ${alternateStyle}`}>&lt;{title}/&gt;</h1> )
}

export default PageTitle
