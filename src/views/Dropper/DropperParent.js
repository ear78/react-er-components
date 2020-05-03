import React from 'react'
import { dropperData } from '../../assets/js/data'
import styles from './DropperParent'

import Dropper from './Dropper'
import PageTitle from '../../components/PageTitle/PageTitle'
import Spacer from '../../components/Spacer/Spacer'
import Container from '../../components/Container/Container'

class DropperParent extends React.Component {

  render() {

    let dropper = dropperData.map(dropper => {
      return <Dropper title={dropper.title} iconName={dropper.icon}>{dropper.content}</Dropper>
    })
    return (
      <section className={styles.DropperParent}>
        <Container>
          <PageTitle title="Dropper"/>
          <Spacer height={50}/>
          {dropper}
        </Container>
      </section>

    )
  }
}

export default DropperParent
