import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Banner.module.scss';

type BannerProps = {
  bgImage: string;
  btnColor?: string;
  btnText: string;
  ctaUrl: string;
  preTitle?: string;
  overlay?: boolean;
  overlayDark?: boolean;
  overlayFull?: boolean;
  showBtn?: boolean;
  subTitle?: string;
  target?: boolean;
  textAlign?: string;
  textColor?: string;
  title: string;
};

function Banner({
  bgImage, btnColor, btnText, ctaUrl, preTitle, overlay, overlayDark, overlayFull,
  showBtn = true, subTitle, target, textColor, title, textAlign,
}: BannerProps) {
  const bannerBtnColor = btnColor || '';
  const bannerOverlay = overlay ? '' : styles.OverlayNone;
  const bannerOverlayDark = overlayDark ? styles.Dark : '';
  const bannerOverlayFull = overlayFull ? styles.Full : '';
  const bannerTextAlign = textAlign === 'center' ? styles.Center : textAlign === 'right' ? styles.Right : '';
  const bannerTextColor = textColor === 'dark' ? styles.DarkText : '';
  const bannerBackgroundImg = bgImage.length ? { backgroundImage: `url(${bgImage})` } : { backgroundImage: 'url(/pinkBuilding.jpg)' };
  const bannerPreTitle = !preTitle ? 'Welcome to Page Banner' : preTitle;
  const bannerTitle = !title ? 'Page Banner' : title;
  const bannerSubTitle = !subTitle ? 'Banners to help your site look great!' : subTitle;
  const bannerBtnText = !btnText ? 'Kontakt' : btnText;

  return (
    <div
      className={`${styles.BackgroundImg} ${bannerTextAlign}`}
      style={bannerBackgroundImg}
    >
      <div className={`${styles.Overlay} ${bannerOverlayFull} ${bannerOverlayDark} ${bannerOverlay}`}>
        <p className={`${styles.PreTitle} ${bannerTextColor}`}>{bannerPreTitle}</p>
        <h1 className={`${styles.Title} ${bannerTextColor}`}>{bannerTitle}</h1>
        <p className={`${styles.SubTitle} ${bannerTextColor}`}>{bannerSubTitle}</p>
        {showBtn
          ? (
            <button type="button" style={{ background: `${bannerBtnColor}` }} className={styles.Button}>
              <a
                href={ctaUrl}
                target={target ? '_blank' : ''}
                rel="noreferrer"
              >
                {bannerBtnText}
&nbsp;
                <FontAwesomeIcon className={styles.Arrow} icon={faArrowRight} />
              </a>
            </button>
          )
          : null}
      </div>
    </div>
  );
}

export default Banner;
