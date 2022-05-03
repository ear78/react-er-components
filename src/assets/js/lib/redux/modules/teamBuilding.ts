import { createSlice } from '@reduxjs/toolkit';

export const teamBuildingSlice = createSlice({
  name: 'teamBuilding',
  initialState: {
    component: 'Team Building',
    description: `The Team Building component helps with creating a profile card with layout options. 
    You're current settings used are: `,
    settings: {
      altLayout: false,
    },
  },
  reducers: {
    setTeamBuildingState: (state, action) => {
      const {
        altLayout,
      } = action.payload;
      Object.assign(state.settings, {
        altLayout,
      });
    },
  },
});

export const { setTeamBuildingState } = teamBuildingSlice.actions;

export default teamBuildingSlice.reducer;
