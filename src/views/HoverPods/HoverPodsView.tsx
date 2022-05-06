import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HoverPods from '../../components/HoverPods/HoverPods';
import PageTitle from '../../components/PageTitle/PageTitle';
import AdjusterMenu from '../../components/AdjusterMenu/AdjusterMenu';
import Typography from '../../components/Typography/Typography';
import AppForm from '../../components/AppForm/AppForm';
import styles from './HoverPodsView.module.scss';
import { handleForm } from '../../assets/js/util/helpers';
import { podData } from '../../assets/js/data';
import { setComponentSettings } from '../../assets/js/lib/redux/modules/app';

function HoverPodsView() {
  // Redux
  const dispatch = useDispatch();
  const { components } = useSelector((state: any) => state.app);
  const { settings } = components[1];

  // Local State
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [formData, setFormData] = useState([{}]);

  useEffect(() => {
    setFormData([
      {
        inputType: 'color',
        labelText: 'Hover Color',
        inputVal: settings.hoverColor,
        name: 'hoverColor',
        change: updateSettings,
      },
      {
        inputType: 'checkbox',
        labelText: 'Squared Pods',
        inputVal: settings.isSquared,
        name: 'isSquared',
        change: updateSettings,
      },
      {
        inputType: 'checkbox',
        labelText: 'Open New Tab',
        inputVal: settings.openTab,
        name: 'openTab',
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

  const handleSettingsSave = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(setComponentSettings({
      ...settings,
    }));

    setIsMenuActive(false);
  };

  const toggleAdjusterMenu = () => {
    setIsMenuActive(() => (!isMenuActive));
  };

  return (
    <section id={styles.HoverPodsView}>
      <AdjusterMenu click={toggleAdjusterMenu} menuActive={isMenuActive}>
        <Typography margin="0 0 20px 0" variant="h3">Adjuster Menu</Typography>
        <AppForm click={handleSettingsSave} formData={formData} />
      </AdjusterMenu>

      <PageTitle title="HoverPods" />
      <HoverPods
        delay={100}
        hoverColor={settings.hoverColor}
        isSquared={settings.isSquared}
        openTab={settings.openTab}
        podData={podData}
      />
    </section>
  );
}

export default HoverPodsView;
