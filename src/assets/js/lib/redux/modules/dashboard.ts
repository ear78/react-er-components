import { createSlice } from '@reduxjs/toolkit';

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    user: {
      fullName: 'Elliot Richardson',
      userName: 'ear78',
      description: 'This is a description of this users profile. They can write whatever they want to write within this space.',
    },
    components: [{}],
  },
  reducers: {
    setDashboardCards: (state, action) => {
      state.components.push(action.payload);
    },
  },
});

export const { setDashboardCards } = dashboardSlice.actions;

export default dashboardSlice.reducer;
