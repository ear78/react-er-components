import React from 'react'
import { esliderData } from 'assets/js/data'
import styles from './Eslider.module.scss'

class Eslider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      height: 0,
      elements: [],
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
      elements: [...initiedSlider, ...state.elements]
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
      <section className={styles.Eslider}>
        {slides}
      </section>
    )
  }
}

export default Eslider
