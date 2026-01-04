import React, {
  useEffect, useRef, useState, createRef,
} from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Eslider.module.scss';

type EsliderProps = {
  data: {
    id: number;
    image: string;
    text: string;
  }[];
  carouselId?: string;
  areButtonsEnabled?: boolean;
  areDotsEnabled?: boolean;
};

export default function Eslider({
  data,
  carouselId = 'carousel',
  areButtonsEnabled = true,
  areDotsEnabled = false,
}: EsliderProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null); // Ref of scroll container
  const isLoading = useSelector((state: any) => state.app.appLoading);
  const [isPrevBtnDisabled, setIsPrevBtnDisabled] = useState<boolean>(false);
  const [isNextBtnDisabled, setIsNextBtnDisabled] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Create refs for the slides
  const scrollRefs = useRef<any>(
    Array.from({ length: data.length }).map(() => createRef()),
  );

  /**
   * Function to go to current slide
   */
  const scrollToSlide = (slide: number) => {
    if (scrollContainerRef.current) {
      const item = scrollContainerRef.current.children[slide].clientWidth * slide;
      scrollContainerRef.current?.scrollTo({
        left: item,
        behavior: 'smooth',
      });
    }
  };

  /**
   * Progress backwards to next step
   */
  const goToPrev = (e?: any) => {
    if (e.type === 'click' || e?.key === 'space' || e?.key === 'ArrowLeft') {
      const currentRef = currentSlide - 1;
      scrollToSlide(currentRef);

      if (scrollContainerRef.current?.scrollLeft === 0) {
        setIsPrevBtnDisabled(true);
      } else {
        setIsPrevBtnDisabled(false);
      }
    }
  };

  /**
   * Progress forward to next step
   */
  const goToNext = (e?: any) => {
    if (e.type === 'click' || e?.key === 'space' || e?.key === 'ArrowRight') {
      const currentRef = currentSlide + 1;
      scrollToSlide(currentRef);

      if (
        scrollContainerRef.current
        && scrollContainerRef.current.scrollLeft
        + scrollContainerRef.current.offsetWidth
        >= scrollContainerRef.current.scrollWidth
      ) {
        setIsNextBtnDisabled(true);
      } else {
        setIsNextBtnDisabled(false);
      }
    }
  };

  /**
   * Go to slide on demand using dot navigation
   * @param slide
   */
  const goToSlide = (slide: number): any => {
    setCurrentSlide(slide);
    scrollToSlide(slide);
  };

  /**
   * Sets active slides and buttons
   */
  const setActiveSlides = () => {
    if (scrollContainerRef.current) {
      const slideCalc = scrollContainerRef.current.scrollWidth
        / scrollContainerRef.current.childElementCount;
      const currentPage = Math.ceil(scrollContainerRef.current.scrollLeft / slideCalc) === 0
        ? 0 : Math.round(scrollContainerRef.current.scrollLeft / slideCalc);

      // Logging for button/pagination work WIP
      // console.log({
      //   // currentSlide,
      //   left: Math.ceil(scrollContainerRef.current.scrollLeft),
      //   slideWidth: slideCalc,
      //   slides: Math.round(scrollContainerRef.current.scrollWidth / slideCalc),
      //   pages: Math.ceil(
      //     (scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth)
      //     / slideCalc,
      //   ),
      //   currentPage,
      //   scrollWidth: scrollContainerRef.current.scrollWidth,
      //   slidesPerScreen: scrollContainerRef.current.offsetWidth / slideCalc,
      //   offsetWidth: scrollContainerRef.current.offsetWidth,
      // });
      setCurrentSlide(currentPage);

      setIsPrevBtnDisabled(scrollContainerRef.current.scrollLeft === 0);
      setIsNextBtnDisabled(
        Math.ceil(scrollContainerRef.current.scrollLeft)
        + scrollContainerRef.current.offsetWidth
        >= scrollContainerRef.current.scrollWidth,
      );
    }
  };

  /**
   * Handles scrolling events to enable/disable navigation buttons with polyfill for iOS
   */
  const handleScroll = () => {
    if (scrollContainerRef.current && 'onscrollend' in scrollContainerRef.current) {
      scrollContainerRef.current.onscrollend = setActiveSlides;
      return;
    }
    let scrollTimeout;
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(setActiveSlides, 300);
  };

  /**
   * Handle resizing of slider
   */
  const handleResize = () => {
    if (scrollContainerRef?.current) {
      const resizeObserver = new ResizeObserver(() => {
        const left = scrollContainerRef?.current?.scrollLeft ?? 0;
        if (left > 0) {
          resetSlider();
        }
      });

      resizeObserver.observe(scrollContainerRef.current);
    }
  };

  /**
   * Resets the slider
   */
  const resetSlider = () => {
    goToSlide(0);
    setIsPrevBtnDisabled(true);
  };

  useEffect(() => {
    resetSlider();
    handleResize();
  }, [scrollContainerRef.current]);

  const slides = data.map((slide, i) => {
    const slideLength = data.length - 1;
    const isLastSlide = slideLength === i ? '0' : '2%';
    return (
      <div
        key={slide.id}
        ref={scrollRefs.current[i]}
        style={{
          backgroundImage: `url(${slide.image})`,
          marginRight: isLastSlide,
        }}
        className={`${styles.Slide} ${!isLoading ? styles.isBlurred : ''}`}
      >
        <div className={styles.OverlayText}>{slide.text}</div>
        <div className={styles.Overlay} />
      </div>
    );
  });

  const dots = data.map((item, index) => (
    <button
      key={item.id}
      type="button"
      className={`${styles.Dot} ${currentSlide === index ? styles.ActiveDot : ''}`}
      onClick={() => goToSlide(index)}
    >
      <span className={styles.Sr}>
        item
        {index + 1}
      </span>
    </button>
  ));

  return (
    <div id={carouselId}>
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className={styles.Eslider}
      >
        {slides}
      </div>
      {(areButtonsEnabled && !areDotsEnabled) && (
        <div className={styles.SlideBtns}>
          <button
            type="button"
            aria-label="left"
            onClick={(e) => goToPrev(e)}
            onKeyUp={(e) => goToPrev(e)}
            disabled={isPrevBtnDisabled}
          >
            <FontAwesomeIcon icon={['fas', 'chevron-left']} />
          </button>
          <button
            type="button"
            aria-label="right"
            onClick={(e) => goToNext(e)}
            onKeyUp={(e) => goToNext(e)}
            disabled={isNextBtnDisabled}
          >
            <FontAwesomeIcon icon={['fas', 'chevron-right']} />
          </button>
        </div>
      )}
      {(areDotsEnabled && !areButtonsEnabled) && (
        <div className={styles.Dots}>{dots}</div>
      )}
    </div>
  );
}
