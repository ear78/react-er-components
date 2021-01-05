import React from 'react'

import Banner from '../Banner/Banner'
import SectionTitle from 'components/SectionTitle/SectionTitle'
import ParaText from 'components/ParaText/ParaText'
import AdjusterMenu from 'components/AdjusterMenu/AdjusterMenu'
import building from 'assets/img/pinkBuilding.jpg'

class FullPage extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      bgImage: building,
      preTitle: 'Welcome to Page Banner',
      title: 'Page Banner',
      subTitle: 'Banners to help your site look great!',
      btnText: 'Kontakt',
      ctaUrl: 'https://www.elliotrichardson.com',
      btnColor: '',
      overlay: false,
      overlayDark: false,
      overlayFull: false,
      formData: [
        {
          inputType: 'text',
          labelText: 'Banner Pre Title',
          change: this.handlePreTitle
        },
        {
          inputType: 'text',
          labelText: 'Banner Title',
          change: this.handleTitle
        },
        {
          inputType: 'text',
          labelText: 'Banner Sub Title',
          change: this.handleSubTitle
        },
        {
          inputType: 'text',
          labelText: 'Banner Button Text',
          change: this.handleButtonText
        },
        {
          inputType: 'text',
          labelText: 'Banner Button Color',
          change: this.handleButtonColor
        },
        {
          inputType: 'checkbox',
          labelText: 'Banner Overlay',
          change: this.handleOverlay
        },
        {
          inputType: 'checkbox',
          labelText: 'Banner Overlay Dark',
          change: this.handleOverlayDark
        },
        {
          inputType: 'checkbox',
          labelText: 'Banner Overlay Full',
          change: this.handleOverlayFull
        },
      ]
    }
  }

  // handleMenuOpen = () => {
  //   this.setState((state) => ({
  //     isMenuActive: !state.isMenuActive
  //   }))
  // }
  //
  // handleMenuClose = () => {
  //   this.setState(() => ({
  //     isMenuActive: false
  //   }))
  // }

  handlePreTitle = (event) => {
    let preTitle = event.target.value
      this.setState((state, props) => ({
          preTitle: preTitle
      }))
  }

  handleTitle = (event) => {
    let title = event.target.value
    this.setState((state, props) => ({
        title: title
    }))
  }

  handleSubTitle = (event) => {
    let subTitle = event.target.value
    this.setState((state) => {
      return {
        subTitle: subTitle
      }
    })
  }

  handleButtonText = (event) => {
    let btnText = event.target.value
    this.setState((state) => {
      return {
        btnText: btnText
      }
    })
  }

  handleButtonColor = (event) => {
    let btnColor = event.target.value
    this.setState((state) => {
      return {
        btnColor: btnColor
      }
    })
  }

  handleOverlay = (event) => {
    let overlay = event.target.checked
    this.setState((state) => {
      return {
        overlay: overlay
      }
    })
  }

  handleOverlayDark = (event) => {
    let overlayDark = event.target.checked
    this.setState((state) => {
      return {
        overlayDark: overlayDark
      }
    })
  }

  handleOverlayFull = (event) => {
    let overlayFull = event.target.checked
    this.setState((state) => {
      return {
        overlayFull: overlayFull
      }
    })
  }

  render() {
    return (
      <div>
        <SectionTitle textAlign={'center'}>Page Banner</SectionTitle>
        <div style={{position: 'relative'}}>
          <AdjusterMenu/>
          <Banner
                  bgImage={building}
                  preTitle={this.state.preTitle}
                  title={this.state.title}
                  subTitle={this.state.subTitle}
                  btnText={this.state.btnText}
                  ctaUrl={this.state.ctaUrl}
                  btnColor={this.state.btnColor}
                  overlay={this.state.overlay}
                  overlayDark={this.state.overlayDark}
                  overlayFull={this.state.overlayFull}/>
        </div>

          <ParaText>
            Page Banner was built as a simple way to build a custom banner that is already preset to look pretty good out of the box as a React Component. Click on the dropdown menu in the top right corner to see the changes in action. Some of the customizable options are the <strong>Background Image, Pre Title, Title, SubTitle, Button Text, Button Href, Button Color, Overlay, Dark Overlay, Full Banner Overlay.</strong>
        </ParaText>
      </div>
    )
  }
}

export default FullPage
