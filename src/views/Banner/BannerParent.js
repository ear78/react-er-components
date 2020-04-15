import React from 'react'
import Banner from './Banner'
import stairway from '../../assets/img/stairway.jpg'
import building from '../../assets/img/pinkBuilding.jpg'


class BannerParent extends React.Component {
  render() {
    return <Banner
            bgImage={building}
            preTitle="Welcome to Page Banner"
            title="Page Banner"
            subTitle="Banners to help your site look great!"
            btnText="Kontakt"
            cta="https://www.elliotrichardson.com"/>
  }
}

export default BannerParent
