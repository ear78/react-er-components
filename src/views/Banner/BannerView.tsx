import React, { lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from '@/views/Banner/BannerView.module.scss';
import { setIsDrawerOpen } from '../../assets/js/lib/redux/modules/app';
import { bannerImgWebp, bannerImgWebpSm } from '../../assets/js/data';

// Lazy load components
// @ts-ignore
const Banner = lazy(() => import('@/components/Banner/Banner.tsx'));
function BannerParent() {
  const dispatch = useDispatch();
  const { components, appLoading, isDrawerOpen } = useSelector((state: any) => state.app);

  const { settings } = components[0];

  const toggleDrawer = () => dispatch(setIsDrawerOpen(!isDrawerOpen));

  return (
    <div className={styles.BannerParent}>
      <button
        type="button"
        aria-label={isDrawerOpen ? 'Close banner settings' : 'Open banner settings'}
        aria-expanded={isDrawerOpen}
        className="absolute right-4 top-4 z-10 grid place-items-center rounded-full size-8 cursor-pointer hover:opacity-90 hover:scale-110 group bg-white text-(--primary-color) shadow transition hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--primary-color)"
        onClick={toggleDrawer}
      >
        <FontAwesomeIcon icon={faPlus} aria-hidden="true" className="group-hover:rotate-90 transition-transform" />
      </button>

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
          target
          webpSizes={{ lgWebp: bannerImgWebp, smWebp: bannerImgWebpSm }}
          isLoading={appLoading}
        />
      </div>
    </div>
  );
}

export default BannerParent;
