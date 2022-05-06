import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './HappyDotsView.module.scss';
import PageTitle from '../../components/PageTitle/PageTitle';
import Spacer from '../../components/Spacer/Spacer';
import Dots from '../../components/Dots/Dots';
import { happyData, sectionData } from '../../assets/js/data';
import AdjusterMenu from '../../components/AdjusterMenu/AdjusterMenu';
import AppForm from '../../components/AppForm/AppForm';
import { handleForm } from '../../assets/js/util/helpers';
import { setComponentSettings } from '../../assets/js/lib/redux/modules/app';

function HappyDots() {
  const dispatch = useDispatch();
  const { components } = useSelector((state: any) => state.app);
  const { settings } = components[3];

  const elementRefs = sectionData.map(() => useRef<HTMLUListElement>(null));
  const [formData, setFormData] = useState<{}[]>([]);
  const [isMenuActive, setIsMenuActive] = useState(false);
  useEffect(() => {
    setFormData([
      {
        inputType: 'color',
        labelText: 'Dot Color',
        inputVal: settings.dotColor,
        name: 'dotColor',
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

  const sections = sectionData.map((d, i) => (
    <section
      key={d.id}
      ref={elementRefs[i]}
      className={(i % 2 !== 0) ? styles.RefReverse : styles.RefSection}
    >
      <div
        className={styles.BgImage}
        style={{ backgroundImage: `url(${d.img})` }}
      />
      <div className={styles.TextBox}>{d.text}</div>
    </section>
  ));

  return (
    <div className={styles.HappyDotsParent}>
      <PageTitle title="HappyDots" />
      <Spacer height={50} />
      <div className={styles.HappyDotsContainer}>
        <AdjusterMenu click={toggleAdjusterMenu} menuActive={isMenuActive}>
          <AppForm click={handleSettingsSave} formData={formData} />
        </AdjusterMenu>
        <Dots
          refs={elementRefs}
          data={happyData}
          textColor={settings.textColor}
          dotColor={settings.dotColor}
        />
        {sections}
      </div>
    </div>
  );
}

export default HappyDots;
