import React from 'react'
import { dropperData } from '../../assets/js/data'
import styles from './DropperParent'
import colors from '../../assets/js/colors'

import Dropper from '../../components/Dropper/Dropper'
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
          <ContainerLeft background={colors.black}>
            <PageTitle title="Dropper" color={colors.hotPink}/>
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
