import React from 'react'
import styles from './Spinner.module.scss'

class Spinner extends React.Component {
  state = {
    loading: true
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState((state) => {
        return {loading: !state.loading}
      })
    }, 900)
  }

  render(){
    let showSpinner = this.state.loading ? 'block' : 'none'
    return (
      <div style={{display: showSpinner}} className={styles.Spinner}>
        {/*Loading...*/}
        <div className={styles.Circle}>
          <div className={styles.Circle2}></div>
        </div>

      </div>
    )
  }
}

export default Spinner
