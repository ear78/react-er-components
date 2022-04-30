import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid from '@mui/material/Grid';
import PageTitle from '../../components/PageTitle/PageTitle';
import Spinner from '../../components/Spinner/Spinner';
import styles from './Eslider.module.scss';
import { setAppLoading } from '../../assets/js/lib/redux/modules/app';

type EsliderProps = {
  data: {
    id: number;
    image: string;
    text: string;
  }[];
};

function Eslider({ data }: EsliderProps) {
  const dispatch = useDispatch();
  const scrollContainerRef = useRef<HTMLDivElement>(null!); // Ref of scroll container
  const isLoading = useSelector((state: any) => state.app.appLoading);

  useEffect(() => {
    // Fake data delay
    setTimeout(() => {
      dispatch(setAppLoading(false));
    }, 1000);
  }, []);

  /**
   * Handles scrolling event and positions the slider depending on container width
   * and position
   */
  const handleScroll = ($arg: number) => {
    const sWidth = scrollContainerRef.current.scrollWidth; // Get scroll width of container
    const sPosition = scrollContainerRef.current.scrollLeft; // Get scroll position

    if (sPosition > 1 && $arg === 1) {
      scrollContainerRef.current.scrollTo(0, 0);
    } else if (sPosition !== sWidth && $arg !== 1) {
      scrollContainerRef.current.scrollTo(sWidth, 0);
    }
  };

  const slides = data.map((slide, i) => {
    const slideLength = data.length - 1;
    const isLastSlide = slideLength === i ? '0' : '2%';
    return (
      <div
        key={slide.id}
        style={{ backgroundImage: `url(${slide.image})`, marginRight: isLastSlide }}
        className={`${styles.Slide} ${isLoading ? styles.isBlurred : ''}`}
      >
        <div className={styles.OverlayText}>{slide.text}</div>
        <div className={styles.Overlay} />
      </div>
    );
  });

  return (
    <Grid container component="section" className={styles.EsliderContainer}>
      <Spinner mounted={isLoading} />
      <Grid item xs={12} mb={6}>
        <PageTitle title="Easy Slider" />
      </Grid>
      <Grid item xs={12}>
        <div ref={scrollContainerRef} className={styles.Eslider}>
          <div className={styles.SlideContainer}>
            {slides}
          </div>
          <div className={styles.SlideBtns}>
            <span role="button" aria-label="left" tabIndex={0} onClick={() => handleScroll(1)}><FontAwesomeIcon icon={['fas', 'chevron-left']} /></span>
            <span role="button" aria-label="right" tabIndex={0} onClick={() => handleScroll(2)}><FontAwesomeIcon icon={['fas', 'chevron-right']} /></span>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Eslider;
