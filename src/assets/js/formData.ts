type FormField = {
  inputType: string;
  labelText: string;
  name: string;
  inputVal?: string | boolean;
};

type FormDataEntry = FormField[] | Record<number, FormField[]> | null;

export const formData: Record<string, FormDataEntry> = {
  '/dashboard': {
    0: [
      { inputType: 'text', labelText: 'Background Image', name: 'bgImage' },
      { inputType: 'text', labelText: 'Banner Pre Title', name: 'preTitle' },
      { inputType: 'text', labelText: 'Cta Url', name: 'ctaUrl' },
      { inputType: 'text', labelText: 'Banner Title', name: 'title' },
      { inputType: 'text', labelText: 'Banner Sub Title', name: 'subTitle' },
      { inputType: 'text', labelText: 'Banner Button Text', name: 'btnText' },
      { inputType: 'color', labelText: 'Banner Button Color', name: 'btnColor' },
      { inputType: 'checkbox', labelText: 'Banner Overlay', name: 'overlay' },
      { inputType: 'checkbox', labelText: 'Banner Overlay Dark', name: 'overlayDark' },
      { inputType: 'checkbox', labelText: 'Banner Overlay Full', name: 'overlayFull' },
      { inputType: 'checkbox', labelText: 'Show CTA Button', name: 'showBtn' },
      { inputType: 'radio', labelText: 'Banner Alignment', name: 'textAlign' },
    ],
    1: [
      { inputType: 'color', labelText: 'Hover Color', name: 'hoverColor' },
      { inputType: 'checkbox', labelText: 'Squared Hover Pod', name: 'isSquared' },
      { inputType: 'checkbox', labelText: 'Open New Tab', name: 'openTab' },
    ],
    2: [
      { inputType: 'checkbox', labelText: 'Alternate Layout', name: 'altLayout' },
    ],
    3: [
      { inputType: 'color', labelText: 'Dot Color', name: 'dotColor' },
    ],
  },
  '/page-banner': [
    // { inputType: 'text', labelText: 'Background Image', name: 'bgImage' },
    { inputType: 'text', labelText: 'Banner Pre Title', name: 'preTitle' },
    { inputType: 'text', labelText: 'Cta Url', name: 'ctaUrl' },
    { inputType: 'text', labelText: 'Banner Title', name: 'title' },
    { inputType: 'text', labelText: 'Banner Sub Title', name: 'subTitle' },
    { inputType: 'text', labelText: 'Banner Button Text', name: 'btnText' },
    { inputType: 'color', labelText: 'Banner Button Color', name: 'btnColor' },
    { inputType: 'checkbox', labelText: 'Banner Overlay', name: 'overlay' },
    { inputType: 'checkbox', labelText: 'Banner Overlay Dark', name: 'overlayDark' },
    { inputType: 'checkbox', labelText: 'Banner Overlay Full', name: 'overlayFull' },
    { inputType: 'checkbox', labelText: 'Show CTA Button', name: 'showBtn' },
    { inputType: 'radio', labelText: 'Banner Alignment', name: 'textAlign' },
  ],
  '/hover-pods': [
    { inputType: 'color', labelText: 'Hover Color', name: 'hoverColor' },
    { inputType: 'checkbox', labelText: 'Squared Pods', name: 'isSquared' },
    { inputType: 'checkbox', labelText: 'Open New Tab', name: 'openTab' },
  ],
  '/team-building': [
    { inputType: 'checkbox', labelText: 'Alternate Layout', name: 'altLayout' },
  ],
  '/happy-dots': [
    { inputType: 'color', labelText: 'Dot Color', name: 'dotColor' },
    { inputType: 'color', labelText: 'Text Color', name: 'textColor' },
  ],
  '/dropper': null,
  '/e-slider': null,
};
