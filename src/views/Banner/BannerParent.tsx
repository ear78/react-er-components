import React from 'react';
import styles from './BannerParent.module.scss';
import Banner from '../../components/Banner/Banner';
import AdjusterMenu from '../../components/AdjusterMenu/AdjusterMenu';
import AppForm from '../../components/AppForm/AppForm';
import building from '../../assets/img/pinkBuilding.jpg';
import Typography from '../../components/Typography/Typography';

// Delare Props & State types
type BannerProps = {};
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
    showAppForm: true, // show form for demo
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
    formData: [],
  };

  componentDidMount() {
    this.setState((state) => ({
      formData: [
        {
          inputType: 'text',
          labelText: 'Banner Pre Title',
          inputVal: state.preTitle,
          name: 'preTitle',
          change: this.handleForm,
        },
        {
          inputType: 'text',
          labelText: 'Banner Title',
          inputVal: state.title,
          name: 'title',
          change: this.handleForm,
        },
        {
          inputType: 'text',
          labelText: 'Banner Sub Title',
          inputVal: state.subTitle,
          name: 'subTitle',
          change: this.handleForm,
        },
        {
          inputType: 'text',
          labelText: 'Banner Button Text',
          inputVal: state.btnText,
          name: 'btnText',
          change: this.handleForm,
        },
        {
          inputType: 'text',
          labelText: 'Banner Button Color',
          inputVal: state.btnColor,
          name: 'btnColor',
          change: this.handleForm,
        },
        {
          inputType: 'checkbox',
          labelText: 'Banner Overlay',
          inputVal: state.overlay,
          name: 'overlay',
          change: this.handleForm,
        },
        {
          inputType: 'checkbox',
          labelText: 'Banner Overlay Dark',
          inputVal: state.overlayDark,
          name: 'overlayDark',
          change: this.handleForm,
        },
        {
          inputType: 'checkbox',
          labelText: 'Banner Overlay Full',
          inputVal: state.overlayFull,
          name: 'overlayFull',
          change: this.handleForm,
        },
      ],
    }));
  }

  handleForm = (event: any): any => {
    console.log('fired', event);
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  toggleAdjusterMenu = () => {
    this.setState((state) => ({
      isMenuActive: !state.isMenuActive,
    }));
  };

  render() {
    const {
      isMenuActive,
      showAppForm,
      formData,
      preTitle, title,
      subTitle, btnText, ctaUrl, btnColor, overlay, overlayDark, overlayFull,
    } = this.state;
    const menuActive = isMenuActive ? styles.active : '';
    const appForm = showAppForm
      ? <AppForm formData={formData} />
      : null;

    return (
      <div className={styles.BannerParent}>
        <AdjusterMenu
          click={this.toggleAdjusterMenu}
        />

        <div className={`${styles.Sidebar} ${menuActive}`}>
          <Typography
            title="Adjuster"
            margin="0 0 20px 0"
            variant="h3"
          />
          {appForm}
        </div>

        <div className={styles.Content}>
          <Banner
            bgImage={building}
            preTitle={preTitle}
            title={title}
            subTitle={subTitle}
            btnText={btnText}
            ctaUrl={ctaUrl}
            btnColor={btnColor}
            overlay={overlay}
            overlayDark={overlayDark}
            overlayFull={overlayFull}
          />
        </div>
      </div>
    );
  }
}

export default BannerParent;
