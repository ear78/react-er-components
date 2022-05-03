import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import TeamCard from '../../components/TeamCard/TeamCard';
import AppForm from '../../components/AppForm/AppForm';
import PageTitle from '../../components/PageTitle/PageTitle';
import Typography from '../../components/Typography/Typography';
import AdjusterMenu from '../../components/AdjusterMenu/AdjusterMenu';
import styles from './TeamBuilding.module.scss';
import { handleForm } from '../../assets/js/util/helpers';
import { setComponentSettings } from '../../assets/js/lib/redux/modules/app';

function TeamBuilding(props: any) {
  const dispatch = useDispatch();
  const { components } = props; // destructure props
  const { settings } = components[2]; // destructure settings

  const formRef = useRef<HTMLFormElement>(null);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [formData, setFormData] = useState<{}[]>([]);

  useEffect(() => {
    setFormData([
      {
        inputType: 'checkbox',
        labelText: 'Alternate Layout',
        inputVal: settings.altLayout,
        name: 'altLayout',
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
      id: 2,
      ...settings,
    }));

    setIsMenuActive(false);
  };

  const toggleAdjusterMenu = () => {
    setIsMenuActive(() => (!isMenuActive));
  };

  return (
    <div className={styles.TeamBuilding}>
      <AdjusterMenu click={toggleAdjusterMenu} menuActive={isMenuActive} bgColor="white">
        <Typography margin="0 0 20px 0" variant="h3">Adjuster Menu</Typography>
        <AppForm click={handleSettingsSave} formRef={formRef} formData={formData} />
      </AdjusterMenu>

      <PageTitle title="TeamBuilding" />
      <TeamCard delay={100} altLayout={settings.altLayout} />
    </div>
  );
}

export default TeamBuilding;
