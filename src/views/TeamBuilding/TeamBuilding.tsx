import React from 'react';
import TeamCard from '../../components/TeamCard/TeamCard';
import AppForm from '../../components/AppForm/AppForm';
import PageTitle from '../../components/PageTitle/PageTitle';
import Typography from '../../components/Typography/Typography';
import AdjusterMenu from '../../components/AdjusterMenu/AdjusterMenu';
import styles from './TeamBuilding.module.scss';

type TeamBuildingParentProps = {
  mounted: boolean;
};

type TeamBuildingParentState = {
  isAltLayout: boolean;
  isMenuActive: boolean;
  formData: any[];
};

class TeamBuilding extends React.Component<TeamBuildingParentProps, TeamBuildingParentState> {
  state: TeamBuildingParentState = {
    isAltLayout: false,
    isMenuActive: false,
    formData: [],
  };

  componentDidMount() {
    this.setState((state) => ({
      formData: [
        {
          inputType: 'checkbox',
          labelText: 'Alternate Layout',
          inputVal: state.isAltLayout,
          name: 'isAltLayout',
          change: this.handleForm,
        },
      ],
    }
    ));
  }

  handleForm = (event: any): any => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  toggleAdjusterMenu = () => {
    this.setState((state) => ({
      isMenuActive: !state.isMenuActive,
    }));
  };

  render() {
    const { mounted } = this.props;
    const { formData, isAltLayout, isMenuActive } = this.state;
    let teamBuilding;

    if (mounted) {
      teamBuilding = <TeamCard delay={100} altLayout={isAltLayout} />;
    } else {
      teamBuilding = null;
    }
    return (
      <div className={styles.TeamBuilding}>
        <AdjusterMenu click={this.toggleAdjusterMenu} menuActive={isMenuActive} bgColor="white">
          <Typography margin="0 0 20px 0" variant="h3">Adjuster Menu</Typography>
          <AppForm formData={formData} />
        </AdjusterMenu>

        <PageTitle title="Team Building" />
        {teamBuilding}
      </div>
    );
  }
}

export default TeamBuilding;
