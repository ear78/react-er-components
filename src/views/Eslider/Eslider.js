import React from 'react'
import styles from './Eslider.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Eslider = ( { data } ) => {
  const scrollContainerRef = React.createRef(); // Ref of scroll container

  /**
   * Handles scrolling event and positions the slider depending on container width
   * and position
   */
  const handleScroll = () => {
    let sWidth = scrollContainerRef.current.scrollWidth; //Get scroll width of container
    let sPosition = scrollContainerRef.current.scrollLeft; // Get scroll position

    if(sPosition > 1) {
      scrollContainerRef.current.scrollTo(0,0)
    } else {
      scrollContainerRef.current.scrollTo(sWidth, 0)
    }
  }

  let slides = data.map((slide, i) => {
    let slideLength = data.length - 1;
    let isLastSlide = slideLength === i ? `0` : `2%`
    return <div key={i} style={{backgroundImage: `url(${slide.image})`, marginRight: isLastSlide}} className={styles.Slide}>
      <div className={styles.OverlayText}>{slide.text}</div>
      <div className={styles.Overlay}></div>
    </div>
  })

  return (
    <div ref={scrollContainerRef} className={styles.EsliderContainer}>
      <div className={styles.SlideContainer}>
      {slides}
      </div>
      <div className={styles.SlideBtns}>
        <span onClick={handleScroll}><FontAwesomeIcon icon={["fas", 'chevron-left']} /></span>
        <span onClick={handleScroll}><FontAwesomeIcon icon={["fas", 'chevron-right']} /></span>
      </div>
    </div>
  )
}

export default Eslider
