import React from 'react'
import Banner from './Banner'
import building from 'assets/img/pinkBuilding.jpg'


class BannerParent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bgImage: building,
      preTitle: 'Welcome to Page Banner',
      title: 'Page Banner',
      subTitle: 'Banners to help your site look great!',
      btnText: 'Kontakt',
      ctaUrl: 'https://www.elliotrichardson.com'
    }
  }

  handlePreTitle = (event) => {
    let preTitle = event.target.value
      this.setState((state, props) => ({
          preTitle: preTitle
      }))
  }

  handleTitle = (event) => {
    let title = event.target.value
    this.setState((state, props) => ({
        title: title
    }))
  }

  handleSubTitle = (event) => {
    let subTitle = event.target.value
    this.setState((state) => {
      return {
        subTitle: subTitle
      }
    })
  }

  render() {
    return <div>
            <Banner
                    bgImage={building}
                    preTitle={this.state.preTitle}
                    title={this.state.title}
                    subTitle={this.state.subTitle}
                    btnText={this.state.btnText}
                    ctaUrl={this.state.ctaUrl}/>
                  <form>
                    <label>
                      Pre Title:
                      <input type="text"  onChange={this.handlePreTitle}/>
                    </label>

                    <label>
                      Title:
                      <input type="text" onChange={this.handleTitle}/>
                    </label>

                    <label>
                      Sub Title:
                      <input type="text" onChange={this.handleSubTitle}/>
                    </label>
                  </form>
            </div>
  }
}

export default BannerParent
