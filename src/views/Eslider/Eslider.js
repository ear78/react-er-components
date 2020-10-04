import React from 'react'
import { esliderData } from 'assets/js/data'
import styles from './Eslider.module.scss'

class Eslider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      height: 0,
      elements: []
    }
  }

  initSlides() {
    console.log('init');
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
        img: slide,
        ref: React.createRef()
      }
    })

    this.setState(() => ({
      elements: [...slides, ...this.state.elements]
    }))


  }

  // handleImageHeight() {
    // let x = this.image.current.height
    // console.log(x);
  // }

  render() {

    let slides = this.state.elements.map((slide, index) => {
      let domEl = React.createRef()
      return <div className={styles.ImageContainer}>
              <img ref={slide.ref} id={`img-${index}`} src={slide.img}/>
             </div>
    })
    // console.log(this.state.elements);

    return (
      <section className={styles.Eslider}>
        {slides}
      </section>
    )
  }
}

export default Eslider
