import { createSlice } from '@reduxjs/toolkit';

export const bannerSlice = createSlice({
  name: 'banner',
  initialState: {
    component: 'Page Banner',
    description: `The Page Banner component helps you create a reusable page banner component for your app 
    along with a few different options. You're current settings used are: `,
    settings: {},
  },
  reducers: {
    setBannerState: (state, action) => {
      const {
        preTitle, title, subTitle, btnText, ctaUrl, btnColor, overlay, overlayDark, overlayFull,
      } = action.payload;
      Object.assign(state.settings, {
        preTitle, title, subTitle, btnText, ctaUrl, btnColor, overlay, overlayDark, overlayFull,
      });
    },
  },
});

export const { setBannerState } = bannerSlice.actions;

export default bannerSlice.reducer;
