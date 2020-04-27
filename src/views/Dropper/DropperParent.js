import React from 'react'
import Dropper from './Dropper'

class DropperParent extends React.Component {

state = {
  isToggled: false
}

handleDropperClick( e ) {
  let event = e.nativeEvent.target
  this.setState((state) => ({
    isToggled: !state.isToggled
  }))

  if(this.state.isToggled) {
    let contentHeight = event.nextElementSibling.scrollHeight
    event.nextElementSibling.style.maxHeight = `${ contentHeight }px`
    event.nextElementSibling.style.opacity = '1'
  } else {
    event.nextElementSibling.style.maxHeight = null
    event.nextElementSibling.style.opacity = null
  }
}

  render() {
    return ( <Dropper click={this.handleDropperClick.bind(this)}/> )
  }
}

export default DropperParent
