import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './BannerView.module.scss';
import Banner from '../../components/Banner/Banner';
import AdjusterMenu from '../../components/AdjusterMenu/AdjusterMenu';
import AppForm from '../../components/AppForm/AppForm';
import Typography from '../../components/Typography/Typography';
import { handleForm } from '../../assets/js/util/helpers';
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
        change: updateSettings,
      },
      {
        inputType: 'text',
        labelText: 'Banner Pre Title',
        inputVal: settings.preTitle,
        name: 'preTitle',
        change: updateSettings,
      },
      {
        inputType: 'text',
        labelText: 'Cta Url',
        inputVal: settings.ctaUrl,
        name: 'ctaUrl',
        change: updateSettings,
      },
      {
        inputType: 'text',
        labelText: 'Banner Title',
        inputVal: settings.title,
        name: 'title',
        change: updateSettings,
      },
      {
        inputType: 'text',
        labelText: 'Banner Sub Title',
        inputVal: settings.subTitle,
        name: 'subTitle',
        change: updateSettings,
      },
      {
        inputType: 'text',
        labelText: 'Banner Button Text',
        inputVal: settings.btnText,
        name: 'btnText',
        change: updateSettings,
      },
      {
        inputType: 'text',
        labelText: 'Banner Button Color',
        inputVal: settings.btnColor,
        name: 'btnColor',
        change: updateSettings,
      },
      {
        inputType: 'checkbox',
        labelText: 'Banner Overlay',
        inputVal: settings.overlay,
        name: 'overlay',
        change: updateSettings,
      },
      {
        inputType: 'checkbox',
        labelText: 'Banner Overlay Dark',
        inputVal: settings.overlayDark,
        name: 'overlayDark',
        change: updateSettings,
      },
      {
        inputType: 'checkbox',
        labelText: 'Banner Overlay Full',
        inputVal: settings.overlayFull,
        name: 'overlayFull',
        change: updateSettings,
      },
      {
        inputType: 'checkbox',
        labelText: 'Show CTA Button',
        inputVal: settings.showBtn,
        name: 'showBtn',
        change: updateSettings,
      },
      {
        inputType: 'radio',
        labelText: 'Banner Alignment',
        inputVal: settings.textAlign,
        name: 'textAlign',
        change: updateSettings,
      },
    ]);
  }, [settings]);

  const updateSettings = (event: any) => {
    const formObj = handleForm(event);

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
          bgImage={settings.bgImage}
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
