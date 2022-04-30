import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './BannerParent.module.scss';
import Banner from '../../components/Banner/Banner';
import AdjusterMenu from '../../components/AdjusterMenu/AdjusterMenu';
import AppForm from '../../components/AppForm/AppForm';
import building from '../../assets/img/pinkBuilding.jpg';
import Typography from '../../components/Typography/Typography';
import { setComponentSettings } from '../../assets/js/lib/redux/modules/app';

function BannerParent(props: any) {
  const dispatch = useDispatch();
  const { components } = props;
  const { settings } = components[0];
  const formRef = useRef<HTMLFormElement>(null);

  const [isMenuActive, setIsMenuActive] = useState(false);
  const [formData, setFormData] = useState<{}[]>([]);

  useEffect(() => {
    setFormData([
      {
        inputType: 'text',
        labelText: 'Background Image',
        inputVal: settings.bgImage,
        name: 'bgImage',
        change: handleForm,
      },
      {
        inputType: 'text',
        labelText: 'Banner Pre Title',
        inputVal: settings.preTitle,
        name: 'preTitle',
        change: handleForm,
      },
      {
        inputType: 'text',
        labelText: 'Cta Url',
        inputVal: settings.ctaUrl,
        name: 'ctaUrl',
        change: handleForm,
      },
      {
        inputType: 'text',
        labelText: 'Banner Title',
        inputVal: settings.title,
        name: 'title',
        change: handleForm,
      },
      {
        inputType: 'text',
        labelText: 'Banner Sub Title',
        inputVal: settings.subTitle,
        name: 'subTitle',
        change: handleForm,
      },
      {
        inputType: 'text',
        labelText: 'Banner Button Text',
        inputVal: settings.btnText,
        name: 'btnText',
        change: handleForm,
      },
      {
        inputType: 'text',
        labelText: 'Banner Button Color',
        inputVal: settings.btnColor,
        name: 'btnColor',
        change: handleForm,
      },
      {
        inputType: 'checkbox',
        labelText: 'Banner Overlay',
        inputVal: settings.overlay,
        name: 'overlay',
        change: handleForm,
      },
      {
        inputType: 'checkbox',
        labelText: 'Banner Overlay Dark',
        inputVal: settings.overlayDark,
        name: 'overlayDark',
        change: handleForm,
      },
      {
        inputType: 'checkbox',
        labelText: 'Banner Overlay Full',
        inputVal: settings.overlayFull,
        name: 'overlayFull',
        change: handleForm,
      },
      {
        inputType: 'checkbox',
        labelText: 'Show CTA Button',
        inputVal: settings.showBtn,
        name: 'showBtn',
        change: handleForm,
      },
      {
        inputType: 'radio',
        labelText: 'Banner Alignment',
        inputVal: settings.textAlign,
        name: 'textAlign',
        change: handleForm,
      },
    ]);
  }, [settings]);

  const handleForm = (event: any): any => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    const formObj = {
      [name]: value,
    };

    dispatch(setComponentSettings({
      ...settings,
      ...formObj,
    }));
  };

  const toggleAdjusterMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const handleSettingsSave = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(setComponentSettings({
      ...settings,
    }));

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
          preTitle={settings.preTitle}
          title={settings.title}
          subTitle={settings.subTitle}
          btnText={settings.btnText}
          ctaUrl={settings.ctaUrl}
          btnColor={settings.btnColor}
          overlay={settings.overlay}
          overlayDark={settings.overlayDark}
          overlayFull={settings.overlayFull}
          textAlign={settings.textAlign}
          showBtn={settings.showBtn}
        />
      </div>
    </div>
  );
}

export default BannerParent;
