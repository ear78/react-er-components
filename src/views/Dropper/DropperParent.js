import React from 'react'
import Dropper from './Dropper'
import PageTitle from '../../components/PageTitle/PageTitle'
import Spacer from '../../components/Spacer/Spacer'
import { dropperData } from '../../assets/js/data'
import styles from './DropperParent'

class DropperParent extends React.Component {

  render() {

    let dropper = dropperData.map(dropper => {
      return <Dropper title={dropper.title} iconName={dropper.icon}>{dropper.content}</Dropper>
    })
    return (
      <section className={styles.DropperParent}>
        <PageTitle title="Dropper"/>
        <Spacer height={50}/>
        {dropper}
      </section>

    )
  }
}

export default DropperParent
