import { configureStore } from '@reduxjs/toolkit';
import appReducer from './modules/app';
import bannerReducer from './modules/banner';
import dashboardReducer from './modules/dashboard';
import teamBuildingReducer from './modules/teamBuilding';

export const store = configureStore({
  reducer: {
    app: appReducer,
    banner: bannerReducer,
    dashboard: dashboardReducer,
    teamBuilding: teamBuildingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
