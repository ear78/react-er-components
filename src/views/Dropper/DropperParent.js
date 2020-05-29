import React from 'react'
import { dropperData } from '../../assets/js/data'
import styles from './DropperParent'

import Dropper from './Dropper'
import PageTitle from '../../components/PageTitle/PageTitle'
import Container from '../../components/Container/Container'
import ContainerRight from '../../components/ContainerRight/ContainerRight'
import ContainerLeft from '../../components/ContainerLeft/ContainerLeft'

class DropperParent extends React.Component {

  render() {

    let dropper = dropperData.map(dropper => {
      return <Dropper title={dropper.title} iconName={dropper.icon}>{dropper.content}</Dropper>
    })
    return (
      <section className={styles.DropperParent}>
        <Container display="flex" padding={40}>
          <ContainerLeft>
            <PageTitle title="Dropper" color={'#f73a7b'}/>
          </ContainerLeft>
          <ContainerRight>
            {dropper}
          </ContainerRight>
        </Container>
      </section>

    )
  }
}

export default DropperParent
