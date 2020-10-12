import React from 'react'
import { esliderData } from 'assets/js/data'
import styles from './Eslider.module.scss'

class Eslider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      height: 0,
      elements: [],
      slideIndex: 0
    }
  }

  handleNext() {
    console.log('fired');
    if(this.state.slideIndex < this.state.elements.length)
    this.setState((state) => ({
      slideIndex: state.slideIndex + 1
    }))
  }

  handlePrev() {
    console.log('fired');
    if(this.state.slideIndex > 0) {
      this.setState((state) => ({
        slideIndex: state.slideIndex - 1
      }))
    }

  }

  initSlides() {
    let initiedSlider = this.state.elements.map((el, i) => {
      if(i === 0) {
        el.isSlideActive = true
      }
      return el
    })

    this.setState((state) => ({
      elements: [...initiedSlider],
      slideIndex: 0
    }))
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      this.initSlides()
    })

  }

  componentWillMount() {
    let slides = esliderData.map((slide, index) => {
      let domEl = React.createRef()

      return {
        id: `img-${index}`,
        img: slide,
        isSlideActive: false,
        ref: React.createRef()
      }
    })

    this.setState(() => ({
      elements: [...slides, ...this.state.elements]
    }))

  }

  render() {

    let slides = this.state.elements.map((slide, index) => {
      let domEl = React.createRef()
      return <div key={index} className={`${styles.ImageContainer} ${slide.isSlideActive ? styles.Active : ''}`}>
              <img ref={slide.ref} id={slide.id} src={slide.img}/>
             </div>
    })

    return (
      <section className={styles.EsliderContainer}>
        <button onClick={this.handlePrev.bind(this)}>Prev</button>
        <button onClick={this.handleNext.bind(this)}>Next</button>
        <section className={styles.Eslider}>
          {slides}
        </section>
      </section>
    )
  }
}

export default Eslider
