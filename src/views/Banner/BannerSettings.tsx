import React, { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleForm } from '../../assets/js/util/helpers';
import { setComponentSettings, setIsDrawerOpen } from '../../assets/js/lib/redux/modules/app';

// @ts-ignore
const AppForm = lazy(() => import('@/components/AppForm/AppForm.tsx'));

function BannerSettings() {
  const dispatch = useDispatch();
  const { components, isDarkMode } = useSelector((state: any) => state.app);
  const { settings } = components[0];

  const updateSettings = (event: any) => {
    const formObj = handleForm(event);

    dispatch(setComponentSettings({
      ...settings,
      ...formObj,
    }));
  };

  const handleSettingsSave = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(setComponentSettings({ ...settings }));
    dispatch(setIsDrawerOpen(false));
  };

  const formData = [
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
      inputType: 'color',
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
      inputType: 'radio',
      labelText: 'Banner Alignment',
      inputVal: settings.textAlign,
      name: 'textAlign',
      change: updateSettings,
    },
  ];

  return (
    <section aria-labelledby="banner-settings-title">
      <h2 id="banner-settings-title" className="mb-4 pl-10 text-xl font-semibold">
        Banner settings
      </h2>
      <Suspense fallback={null}>
        <AppForm click={handleSettingsSave} formData={formData} isDarkMode={isDarkMode} />
      </Suspense>
    </section>
  );
}

export default BannerSettings;