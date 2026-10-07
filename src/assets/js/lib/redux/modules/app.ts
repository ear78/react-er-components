import { createSlice } from '@reduxjs/toolkit';

export const dashboardSlice = createSlice({
  name: 'app',
  initialState: {
    appLoading: true,
    isModalActive: false,
    isDrawerOpen: false,
    isDarkMode: false,
    components: [
      {
        id: 0,
        component: 'Page Banner',
        path: '/page-banner',
        description: "The Page Banner component helps you create a reusable page banner component for your app along with a few different options. You're current settings used are: ",
        settings: {
          id: 0,
          preTitle: 'Welcome to Page Banner',
          title: 'Page Banner',
          subTitle: 'Banners to help your site look great!',
          btnText: 'Kontakt',
          ctaUrl: 'https://www.elliotrichardson.com',
          btnColor: '#f13877',
          overlay: false,
          overlayDark: false,
          overlayFull: false,
          textAlign: 'left',
          showBtn: true,
        },
      },
      {
        id: 1,
        component: 'Hover Pods',
        path: '/hover-pods',
        description: `The Hover Pods component is a creative way to make a clickable link. 
        You're current settings used are: `,
        settings: {
          id: 1,
          hoverColor: '#000000',
          isSquared: false,
          openTab: true,
        },
      },
      {
        id: 2,
        component: 'Team Building',
        path: '/team-building',
        description: `The Team Building component helps with creating a profile card with layout options. 
        You're current settings used are: `,
        settings: {
          id: 2,
          altLayout: false,
        },
      },
      {
        id: 3,
        component: 'Happy Dots',
        path: '/happy-dots',
        description: `The Happy Dots component helps with creating a scrollable menu. 
        You're current settings used are: `,
        settings: {
          id: 3,
          dotColor: '#f73a7b',
          textColor: '#fff',
        },
      },
      {
        id: 4,
        component: 'Dropper',
        path: '/dropper',
        description: `The Dropper component helps with creating some accordions. 
        You're current settings used are: `,
        settings: {
          id: 4,
        },
      },
      {
        id: 5,
        component: 'E-Slider',
        path: '/e-slider',
        description: `The E-Slider component helps with creating a scrollable image slider. 
        You're current settings used are: `,
        settings: {
          id: 5,
        },
      },
    ],
  },
  reducers: {
    setDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
    setAppState: (state, action) => {
      state += action.payload;
    },
    setAppLoading: (state, action) => {
      state.appLoading = action.payload;
    },
    setIsModalActive: (state, action) => {
      state.isModalActive = action.payload;
    },
    setIsDrawerOpen: (state, action) => {
      state.isDrawerOpen = action.payload;
    },
    setComponentSettings: (state, action) => {
      const found = state.components.find((item) => item.id === action.payload.id);
      if (found) {
        found.settings = action.payload;
      }
    },
  },
});

export const {
  setDarkMode,
  setAppState,
  setComponentSettings,
  setIsModalActive,
  setIsDrawerOpen,
  setAppLoading,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
