import React from 'react';

import TeamCard from '../../components/TeamCard/TeamCard';

type TeamBuildingParentProps = {};
type TeamBuildingParentState = {
  teamBuildingMounted: boolean;
};

class TeamBuilding extends React.Component<TeamBuildingParentProps, TeamBuildingParentState> {
  constructor(props: TeamBuildingParentProps) {
    super(props);
    this.state = {
      teamBuildingMounted: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState((state) => ({ teamBuildingMounted: !state.teamBuildingMounted }));
    }, 900);
  }

  render() {
    const { teamBuildingMounted } = this.state;
    let teamBuilding;
    if (teamBuildingMounted) {
      teamBuilding = <TeamCard delay={100} />;
    } else {
      teamBuilding = null;
    }
    return (
      <div>
        {teamBuilding}
      </div>
    );
  }
}

export default TeamBuilding;
