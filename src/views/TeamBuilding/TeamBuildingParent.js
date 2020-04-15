import React from 'react'

import TeamBuilding from './TeamBuilding'

class TeamBuildingParent extends React.Component {
  state = {
    teamBuildingMounted: false
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState((state) => {
        return {teamBuildingMounted: !state.teamBuildingMounted}
      })
    }, 900)

  }
  render() {
    let teamBuilding
    if(this.state.teamBuildingMounted){
      teamBuilding = <TeamBuilding delay={150}/>
    }
    else {
      teamBuilding = null
    }
    return (
      <div>
        {teamBuilding}
      </div>
    )
  }
}

export default TeamBuildingParent
