import React, {
  Suspense, lazy, useEffect, useState,
} from 'react';
import Edit from '@mui/icons-material/Edit';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Dashboard.module.scss';
import logo from '../../assets/img/er-logo.svg';
import { handleForm } from '../../assets/js/util/helpers';
import { setComponentSettings, setIsModalActive } from '../../assets/js/lib/redux/modules/app';
import User from '../../components/User/User';
import PageTitle from '@/components/PageTitle/PageTitle';

// Lazy load components
const Modal = lazy(() => import('../../components/Modal/Modal'));
const AppForm = lazy(() => import('../../components/AppForm/AppForm'));

function Dashboard() {
  // Redux
  const dispatch = useDispatch();
  const { components, isModalActive, isDarkMode } = useSelector((state: any) => state.app);

  // Local State
  // const [isModalActive, setIsModalActive] = useState(false);
  const [componentId, setComponentId] = useState<number>(0);
  const [formData, setFormData] = useState<{}[]>([]);

  useEffect(() => {
    const setupForms = [
      [
        {
          inputType: 'text',
          labelText: 'Background Image',
          inputVal: components[0].settings.bgImage,
          name: 'bgImage',
          change: updateSettings,
        },
        {
          inputType: 'text',
          labelText: 'Banner Pre Title',
          inputVal: components[0].settings.preTitle,
          name: 'preTitle',
          change: updateSettings,
        },
        {
          inputType: 'text',
          labelText: 'Cta Url',
          inputVal: components[0].settings.ctaUrl,
          name: 'ctaUrl',
          change: updateSettings,
        },
        {
          inputType: 'text',
          labelText: 'Banner Title',
          inputVal: components[0].settings.title,
          name: 'title',
          change: updateSettings,
        },
        {
          inputType: 'text',
          labelText: 'Banner Sub Title',
          inputVal: components[0].settings.subTitle,
          name: 'subTitle',
          change: updateSettings,
        },
        {
          inputType: 'text',
          labelText: 'Banner Button Text',
          inputVal: components[0].settings.btnText,
          name: 'btnText',
          change: updateSettings,
        },
        {
          inputType: 'color',
          labelText: 'Banner Button Color',
          inputVal: components[0].settings.btnColor,
          name: 'btnColor',
          change: updateSettings,
        },
        {
          inputType: 'checkbox',
          labelText: 'Banner Overlay',
          inputVal: components[0].settings.overlay,
          name: 'overlay',
          change: updateSettings,
        },
        {
          inputType: 'checkbox',
          labelText: 'Banner Overlay Dark',
          inputVal: components[0].settings.overlayDark,
          name: 'overlayDark',
          change: updateSettings,
        },
        {
          inputType: 'checkbox',
          labelText: 'Banner Overlay Full',
          inputVal: components[0].settings.overlayFull,
          name: 'overlayFull',
          change: updateSettings,
        },
        {
          inputType: 'checkbox',
          labelText: 'Show CTA Button',
          inputVal: components[0].settings.showBtn,
          name: 'showBtn',
          change: updateSettings,
        },
        {
          inputType: 'radio',
          labelText: 'Banner Alignment',
          inputVal: components[0].settings.textAlign,
          name: 'textAlign',
          change: updateSettings,
        },
      ],
      [
        {
          inputType: 'color',
          labelText: 'Hover Color',
          inputVal: components[1].settings.hoverColor,
          name: 'hoverColor',
          change: updateSettings,
        },
        {
          inputType: 'checkbox',
          labelText: 'Squared Hover Pod',
          inputVal: components[1].settings.isSquared,
          name: 'isSquared',
          change: updateSettings,
        },
        {
          inputType: 'checkbox',
          labelText: 'Open New Tab',
          inputVal: components[1].settings.openTab,
          name: 'openTab',
          change: updateSettings,
        },
      ],
      [
        {
          inputType: 'checkbox',
          labelText: 'Alternate Layout',
          inputVal: components[2].settings.altLayout,
          name: 'altLayout',
          change: updateSettings,
        },
      ],
      [
        {
          inputType: 'color',
          labelText: 'Dot Color',
          inputVal: components[3].settings.dotColor,
          name: 'dotColor',
          change: updateSettings,
        },
      ],
    ];
    setFormData(setupForms[componentId]);
  }, [components, componentId, isModalActive]);

  const updateSettings = (event: any) => {
    const formObj = handleForm(event);

    dispatch(setComponentSettings({
      ...components[componentId].settings,
      ...formObj,
    }));
  };

  const toggleModal = () => {
    dispatch(setIsModalActive(!isModalActive));
  };

  const editSettings = (id: number) => {
    setComponentId(id);
    dispatch(setIsModalActive(true));
  };

  const handleSettingsSave = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(setComponentSettings({
      ...components[componentId].settings,
    }));

    dispatch(setIsModalActive(false));
  };

  const truncate = (str: any, maxLength = 30) => {
    const truncated = str.length > maxLength ? `${str.slice(0, maxLength - 1)}...` : str;
    return truncated;
  };

  let cards;
  if (components) {
    cards = components.map((component: any) => (
      <div key={component.id} className={`${styles.Card} h-auto`}>
        <p className={styles.Header}>
          <img src={logo} alt="logo" />
          {component.component}
        </p>
        <p className={styles.Description}>
          {component.description}
          {Object.keys(component.settings).length > 1
            ? Object.entries(component.settings).map(([key, value]: any) => (
              <span key={key} className={styles.SettingsPill}>
                <b>{`${key}:`}</b>
                &nbsp;
                {typeof value === 'boolean' && value ? 'True'
                  : typeof value === 'boolean' && !value ? 'False'
                    : truncate(value)}
              </span>
            ))
            : <span className={styles.SettingsPill}>Default Settings</span>}
        </p>
        <p className={styles.Footer}>
          <span className={styles.Circle} />
          {component.component}
          &nbsp; settings
          <button type="button" aria-label={`Edit settings for ${component.component}`} onClick={() => editSettings(component.id)} className={styles.EditBtn}>
            <Edit fontSize="inherit">edit</Edit>
          </button>
        </p>
      </div>
    ));
  } else {
    cards = null;
  }

  return (
    <div className={`${styles.Dashboard} ${isDarkMode ? styles.Dark : ''}`}>
      <Suspense fallback="<div>Loading...</div>">
        <Modal isModalActive={isModalActive} click={toggleModal} isDarkMode={isDarkMode}>
          <AppForm click={handleSettingsSave} formData={formData} isDarkMode={isDarkMode} />
        </Modal>
      </Suspense>
      <div className='mb-6'>
        <Suspense fallback="<div>Loading...</div>">
          <PageTitle title="Dashboard" />
        </Suspense>
      </div>
      <div className='flex gap-5'>
        <div className='w-full sm:w-1/4 relative'>
          <User />
        </div>
        <div className='w-full sm:w-3/4'>
          <div className='grid grid-cols-2 gap-4'>
            {cards}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
