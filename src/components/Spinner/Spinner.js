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
    }, 3000)
  }

  render(){
    let showSpinner = this.state.loading ? 'block' : 'none'
    return (
      <div style={{display: showSpinner}} className={styles.Spinner}>
        Loading...
      </div>
    )
  }
}

export default Spinner
