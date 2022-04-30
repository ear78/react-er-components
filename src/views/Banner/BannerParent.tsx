import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './BannerParent.module.scss';
import Banner from '../../components/Banner/Banner';
import AdjusterMenu from '../../components/AdjusterMenu/AdjusterMenu';
import AppForm from '../../components/AppForm/AppForm';
import building from '../../assets/img/pinkBuilding.jpg';
import Typography from '../../components/Typography/Typography';
import { setComponentSettings } from '../../assets/js/lib/redux/modules/app';

type BannerState = {
  bgImage: string;
  preTitle?: string;
  title: string;
  subTitle: string;
  btnText: string;
  ctaUrl: string;
  btnColor?: string;
  overlay?: boolean;
  overlayDark?: boolean;
  overlayFull?: boolean;
  showBtn?: boolean;
  textAlign?: string;
};

function BannerParent() {
  const dispatch = useDispatch();
  const formRef = useRef<HTMLFormElement>(null);
  // const reduxSettings = useSelector((state: any) => state.app.components[0].settings);
  const [settingsData, setSettingsData] = useState<BannerState>({
    bgImage: '',
    preTitle: '',
    title: '',
    subTitle: '',
    btnText: '',
    ctaUrl: '',
    btnColor: '',
    overlay: false,
    overlayDark: false,
    overlayFull: false,
    showBtn: true,
    textAlign: '',
  });

  const [isMenuActive, setIsMenuActive] = useState(false);
  const [formData, setFormData] = useState<{}[]>([]);

  useEffect(() => {
    // if (Object.keys(reduxSettings).length) {
    //   // console.log('fired');

    //   setSettingsData((prevState) => ({
    //     ...prevState,
    //     ...reduxSettings,
    //   }));
    // }

    setFormData([
      {
        inputType: 'text',
        labelText: 'Background Image',
        inputVal: settingsData.bgImage,
        name: 'bgImage',
        change: handleForm,
      },
      {
        inputType: 'text',
        labelText: 'Banner Pre Title',
        inputVal: settingsData.preTitle,
        name: 'preTitle',
        change: handleForm,
      },
      {
        inputType: 'text',
        labelText: 'Cta Url',
        inputVal: settingsData.ctaUrl,
        name: 'ctaUrl',
        change: handleForm,
      },
      {
        inputType: 'text',
        labelText: 'Banner Title',
        inputVal: settingsData.title,
        name: 'title',
        change: handleForm,
      },
      {
        inputType: 'text',
        labelText: 'Banner Sub Title',
        inputVal: settingsData.subTitle,
        name: 'subTitle',
        change: handleForm,
      },
      {
        inputType: 'text',
        labelText: 'Banner Button Text',
        inputVal: settingsData.btnText,
        name: 'btnText',
        change: handleForm,
      },
      {
        inputType: 'text',
        labelText: 'Banner Button Color',
        inputVal: settingsData.btnColor,
        name: 'btnColor',
        change: handleForm,
      },
      {
        inputType: 'checkbox',
        labelText: 'Banner Overlay',
        inputVal: settingsData.overlay,
        name: 'overlay',
        change: handleForm,
      },
      {
        inputType: 'checkbox',
        labelText: 'Banner Overlay Dark',
        inputVal: settingsData.overlayDark,
        name: 'overlayDark',
        change: handleForm,
      },
      {
        inputType: 'checkbox',
        labelText: 'Banner Overlay Full',
        inputVal: settingsData.overlayFull,
        name: 'overlayFull',
        change: handleForm,
      },
      {
        inputType: 'checkbox',
        labelText: 'Show CTA Button',
        inputVal: settingsData.showBtn,
        name: 'showBtn',
        change: handleForm,
      },
      {
        inputType: 'text',
        labelText: 'Banner Alignment',
        inputVal: settingsData.textAlign,
        name: 'textAlign',
        change: handleForm,
      },
    ]);
  }, [settingsData]);

  const handleForm = (event: any): any => {
    // console.log(event);
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    const formObj = {
      [name]: value,
    };

    setSettingsData((prevState) => ({
      ...prevState,
      ...formObj,
    }));
  };

  const toggleAdjusterMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const handleSettingsSave = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(setComponentSettings({
      id: 0,
      ...settingsData,
    }));

    // Reset Form Inputs
    formRef.current?.reset();
    setIsMenuActive(false);
  };

  return (
    <div className={styles.BannerParent}>
      <AdjusterMenu click={toggleAdjusterMenu} menuActive={isMenuActive}>
        <Typography margin="0 0 20px 0" variant="h3">Adjuster Menu</Typography>
        <AppForm click={handleSettingsSave} formData={formData} formRef={formRef} />
      </AdjusterMenu>

      <div className={styles.Content}>
        <Banner
          bgImage={building}
          preTitle={settingsData.preTitle}
          title={settingsData.title}
          subTitle={settingsData.subTitle}
          btnText={settingsData.btnText}
          ctaUrl={settingsData.ctaUrl}
          btnColor={settingsData.btnColor}
          overlay={settingsData.overlay}
          overlayDark={settingsData.overlayDark}
          overlayFull={settingsData.overlayFull}
          textAlign={settingsData.textAlign}
          showBtn={settingsData.showBtn}
        />
      </div>
    </div>
  );
}

export default BannerParent;
