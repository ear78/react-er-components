import React from 'react'
import styles from './BannerParent.module.scss'

import Banner from '../../components/Banner/Banner'
import AdjusterMenu from '../../components/AdjusterMenu/AdjusterMenu'
import H3Comp from '../../components/H3Comp/H3Comp'
import AppForm from '../../components/AppForm/AppForm'
import building from '../../assets/img/pinkBuilding.jpg'

// Delare Props & State types
type BannerProps = {}
type BannerState = {
  showAppForm: boolean;
  isMenuActive: boolean;
  bgImage: string;
  preTitle: string;
  title: string;
  subTitle: string;
  btnText: string;
  ctaUrl: string;
  btnColor: string;
  overlay: boolean;
  overlayDark: boolean;
  overlayFull: boolean;
  formData: any[];
};

class BannerParent extends React.Component<BannerProps, BannerState> {

    state: BannerState = {
      showAppForm: true,// show form for demo
      isMenuActive: false,
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
      formData: []
    }

  componentDidMount() {
    this.setState((state) => ({
      formData: [
        {
          inputType: 'text',
          labelText: 'Banner Pre Title',
          inputVal: state.preTitle,
          name: 'preTitle',
          change: this.handleForm
        },
        {
          inputType: 'text',
          labelText: 'Banner Title',
          inputVal: state.title,
          name: 'title',
          change: this.handleForm
        },
        {
          inputType: 'text',
          labelText: 'Banner Sub Title',
          inputVal: state.subTitle,
          name: 'subTitle',
          change: this.handleForm
        },
        {
          inputType: 'text',
          labelText: 'Banner Button Text',
          inputVal: state.btnText,
          name: 'btnText',
          change: this.handleForm
        },
        {
          inputType: 'text',
          labelText: 'Banner Button Color',
          inputVal: state.btnColor,
          name: 'btnColor',
          change: this.handleForm
        },
        {
          inputType: 'checkbox',
          labelText: 'Banner Overlay',
          inputVal: state.overlay,
          name: 'overlay',
          change: this.handleForm
        },
        {
          inputType: 'checkbox',
          labelText: 'Banner Overlay Dark',
          inputVal: state.overlayDark,
          name: 'overlayDark',
          change: this.handleForm
        },
        {
          inputType: 'checkbox',
          labelText: 'Banner Overlay Full',
          inputVal: state.overlayFull,
          name: 'overlayFull',
          change: this.handleForm
        },
      ]
    }))
  }

  handleForm = (event: any) => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState((state) => ({
      ...state,
      [name]: value
    }))
  }

  handleMenuOpen = () => {
    this.setState((state) => ({
      isMenuActive: !state.isMenuActive
    }))
  }

  handleMenuClose = () => {
    this.setState(() => ({
      isMenuActive: false
    }))
  }

  render() {
    let menuActive = this.state.isMenuActive ? styles.active : ''
    let appForm = this.state.showAppForm ?
    <AppForm formData={this.state.formData}/> :
      null

    return <div className={styles.BannerParent}>
            <AdjusterMenu
              click={this.handleMenuOpen}/>

            <div className={`${styles.Sidebar} ${menuActive}`}>
              <H3Comp
                title="Adjuster"
                margin="0 0 20px 0"/>
              {appForm}
            </div>

            <div className={styles.Content}>
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
          </div>
  }
}

export default BannerParent
