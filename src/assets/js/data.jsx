import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithubSquare,
  faInstagramSquare,
  faSquareLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import snowGhosts from '../img/snowghosts.jpg';
import greyBuilding from '../img/building-resize.jpg';
// import about from '../img/ABOUT.jpg'
import echoTower from '../img/echoTower.jpg';
import jail from '../img/jail.jpg';
import stairway from '../img/stairway.jpg';
import stripes from '../img/stripes.jpg';
import chairs from '../img/chairs.jpg';
import echoTowerSml from '../img/echoTower-sml.jpg';
// import jailSml from '../img/jail-sml.jpg'
// import stairwaySml from '../img/stairway-sml.jpg'
import stripesSml from '../img/stripes-sml.jpg';
import chairsSml from '../img/chairs-sml.jpg';
import portfolio11 from '../img/UserMale.svg';
import portfolio12 from '../img/femaleUser.svg';
import PageBanner from '../img/pagebanner-screenshot.png';
import HoverPods from '../img/hoverpods-screenshot.png';
import TeamBuilding from '../img/teambuilding-screenshot.png';
import HappyDots from '../img/happydots-screenshot.png';
import Dropper from '../img/dropper-screenshot.png';
import EasySlider from '../img/easyslider-screenshot.png';
import pinkBuildingWebp from '../img/pinkBuilding.webp';
import pinkBuildingWebpSm from '../img/pinkBuilding-sm.webp';
import pinkBuildingJpg from '../img/pinkBuilding.jpg';

export const bannerImgWebp = pinkBuildingWebp;
export const bannerImgWebpSm = pinkBuildingWebpSm;
export const bannerImgJpg = pinkBuildingJpg;

export const homeData = {
  desc: `Please use the navigation to preview and try out these components I built from the ground up with React.js. 
  Actually, everything on the site was designed and built by me from the ground up with the exception of the Container and form components used from Mui. 
  The purpose of this project is to show my skills as a Front End UI Developer, and also to show the process of building and design UI/UX components from the ground up. 
  Technologies used are React, Typescript, Redux, Jest, React Transition Group, Css Modules, Sass, deployed to Netlify, and of course Javascript since React is all Javascript. 
  Data is all custom data I created off in the data.js section of the app to be able to pull into components via imports and where images are imported and handled by webpack. 
  Currently a work in progress as I continue to build out the project with more components and features. Really built for portfolio demonstration purposes only. The current customizable components are`,
  components:
    'HappyDots, Banner, HoverPods, TeamBuilding, Dropper, EasySlider, Dashboard',
};

export const happyData = [
  {
    id: 0,
    text: 'Market Place',
  },
  {
    id: 1,
    text: 'LifeTime Data',
  },
  {
    id: 2,
    text: 'Attribution',
  },
  {
    id: 3,
    text: 'Smart Data',
  },
  {
    id: 4,
    text: 'User Experience',
  },
];

export const podData = [
  {
    id: 1,
    podBgImage: echoTowerSml,
    podText: 'Hello',
    podLink: 'https://www.apple.com',
  },
  {
    id: 2,
    podBgImage: chairsSml,
    podText: "I'm",
    podLink: 'https://www.apple.com',
  },
  {
    id: 3,
    podBgImage: greyBuilding,
    podText: 'A',
    podLink: 'https://www.apple.com',
  },
  {
    id: 4,
    podBgImage: stripesSml,
    podText: 'Hover Pod',
    podLink: 'https://www.apple.com',
  },
];

export const teamMembers = [
  {
    id: 0,
    image: portfolio11,
    name: 'Jack Reacher',
    jobTitle: 'Professional Hitman',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
  },
  {
    id: 1,
    image: portfolio12,
    name: 'David Mattias',
    jobTitle: 'General Manager',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
  },
  {
    id: 2,
    image: portfolio11,
    name: 'Elias Leonard',
    jobTitle: 'Head of Technology',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
  },
  {
    id: 3,
    image: portfolio12,
    name: 'Megan Kimberly',
    jobTitle: 'Art Director',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
  },
  {
    id: 4,
    image: portfolio11,
    name: 'Johnny Reb',
    jobTitle: 'Computerist',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
  },
  {
    id: 5,
    image: portfolio12,
    name: 'Paran John',
    jobTitle: 'Senior Developer',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
  },
  {
    id: 6,
    image: portfolio11,
    name: 'Elias Leonard',
    jobTitle: 'Head of Technology',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
  },
  {
    id: 7,
    image: portfolio12,
    name: 'Megan Kimberly',
    jobTitle: 'Art Director',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
  },
  {
    id: 8,
    image: portfolio11,
    name: 'David Mattias',
    jobTitle: 'General Manager',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
  },
  {
    id: 9,
    image: portfolio12,
    name: 'Elias Leonard',
    jobTitle: 'Head of Technology',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
  },
  {
    id: 10,
    image: portfolio11,
    name: 'David Mattias',
    jobTitle: 'General Manager',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
  },
  {
    id: 11,
    image: portfolio12,
    name: 'Paran John',
    jobTitle: 'Senior Developer',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
  },
];

export const socialItems = [
  {
    platform: 'linkedin',
    path: 'https://linkedin.com/in/elliot-richardson',
    icon: <FontAwesomeIcon icon={faSquareLinkedin} />,
  },
  {
    platform: 'twitter-square',
    path: 'https://twitter.com/mixermanelliot',
    icon: <FontAwesomeIcon icon={faTwitterSquare} />,
  },
  {
    platform: 'github-square',
    path: 'https://github.com/ear78',
    icon: <FontAwesomeIcon icon={faGithubSquare} />,
  },
  {
    platform: 'instagram',
    path: 'https://instagram.com/elliot.richardson',
    icon: <FontAwesomeIcon icon={faInstagramSquare} />,
  },
];

export const sectionData = [
  {
    id: 0,
    img: chairs,
    title: 'Hello World',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta non pulvinar neque laoreet suspendisse. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Senectus et netus et malesuada fames ac turpis.',
  },
  {
    id: 1,
    img: echoTower,
    title: 'Hello World',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta non pulvinar neque laoreet suspendisse. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Senectus et netus et malesuada fames ac turpis.',
  },
  {
    id: 2,
    img: stairway,
    title: 'Hello World',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta non pulvinar neque laoreet suspendisse. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Senectus et netus et malesuada fames ac turpis.',
  },
  {
    id: 3,
    img: stripes,
    title: 'Hello World',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta non pulvinar neque laoreet suspendisse. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Senectus et netus et malesuada fames ac turpis.',
  },
  {
    id: 4,
    img: jail,
    title: 'Hello World',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta non pulvinar neque laoreet suspendisse. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Senectus et netus et malesuada fames ac turpis.',
  },
];

export const dropperData = [
  {
    id: 0,
    title: "I'm a dropper title...",
    icon: 'angle-down',
    content:
      "I'm the content that is connected to the dropper... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 1,
    title: "I'm a dropper title...",
    icon: 'angle-down',
    content:
      "I'm the content that is connected to the dropper... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "I'm a dropper title...",
    icon: 'angle-down',
    content:
      "I'm the content that is connected to the dropper... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "I'm a dropper title...",
    icon: 'angle-down',
    content:
      "I'm the content that is connected to the dropper... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const esliderData = [
  {
    id: 0,
    image: pinkBuildingJpg,
    text: 'Night in New York.',
  },
  {
    id: 1,
    image: snowGhosts,
    text: 'Snow Ghosts of Schweitzer.',
  },
  {
    id: 2,
    image: greyBuilding,
    text: 'Downtown L.A.',
  },
  {
    id: 3,
    image: echoTower,
    text: 'Tower of communication.',
  },
  {
    id: 4,
    image: stripes,
    text: 'Stripes to the future.',
  },
  {
    id: 5,
    image: chairs,
    text: 'Musical Chairs.',
  },
];

export const forms = [
  [
    {
      inputType: 'text',
      labelText: 'Background Image',
      name: 'bgImage',
    },
    {
      inputType: 'text',
      labelText: 'Banner Pre Title',
      name: 'preTitle',
    },
    {
      inputType: 'text',
      labelText: 'Cta Url',
      name: 'ctaUrl',
    },
    {
      inputType: 'text',
      labelText: 'Banner Title',
      name: 'title',
    },
    {
      inputType: 'text',
      labelText: 'Banner Sub Title',
      name: 'subTitle',
    },
    {
      inputType: 'text',
      labelText: 'Banner Button Text',
      name: 'btnText',
    },
    {
      inputType: 'color',
      labelText: 'Banner Button Color',
      name: 'btnColor',
    },
    {
      inputType: 'checkbox',
      labelText: 'Banner Overlay',
      name: 'overlay',
    },
    {
      inputType: 'checkbox',
      labelText: 'Banner Overlay Dark',
      name: 'overlayDark',
    },
    {
      inputType: 'checkbox',
      labelText: 'Banner Overlay Full',
      name: 'overlayFull',
    },
    {
      inputType: 'checkbox',
      labelText: 'Show CTA Button',
      name: 'showBtn',
    },
    {
      inputType: 'radio',
      labelText: 'Banner Alignment',
      name: 'textAlign',
    },
  ],
  [
    {
      inputType: 'color',
      labelText: 'Hover Color',
      name: 'hoverColor',
    },
    {
      inputType: 'checkbox',
      labelText: 'Squared Pods',
      name: 'isSquared',
    },
    {
      inputType: 'checkbox',
      labelText: 'Open New Tab',
      name: 'openTab',
    },
  ],
  [
    {
      inputType: 'checkbox',
      labelText: 'Alternate Layout',
      name: 'altLayout',
    },
  ],
  [
    {
      inputType: 'color',
      labelText: 'Dot Color',
      name: 'dotColor',
    },
  ],
];

export const pageSectionData = [
  {
    id: 0,
    title: 'Page Banner Component',
    component: 'Page Banner',
    description: `is an easy to use good looking banner to help you get
    started out of the box. It allows you to easily update the Pre title text,
    Title text, Sub title text, button color, text alignment, and overlay.`,
    img: PageBanner,
    page: '/page-banner',
  },
  {
    id: 1,
    title: 'Hover Pods Component',
    component: 'Hover Pods',
    description: `is a creative way to make clickable links with a simple hover animation.
    The changeable props are background hover color, text color, squared format,
    open tab on click.`,
    img: HoverPods,
    page: '/hover-pods',
  },
  {
    id: 2,
    title: 'Team Building Component',
    component: 'Team Building',
    description: `is simple component that can create a user/team member card
    with a simple hover animation.
    It has an alt layout prop, and you can pass an object to dynamically represent
    each card.`,
    img: TeamBuilding,
    page: '/team-building',
  },
  {
    id: 3,
    title: 'Happy Dots Component',
    component: 'Happy Dots',
    description: `is simple component that can create a scrollable menu
    with a simple hover animation.
    It has a ref prop, dot color prop, text color prop, and you can pass an object to
    dynamically represent each dot as well.`,
    img: HappyDots,
    page: '/happy-dots',
  },
  {
    id: 4,
    title: 'Dropper Component',
    component: 'Dropper',
    description: `is simple component that can create a simple dropdown
    with a simple hover and click animation.
    It takes a title prop and passes the content as children`,
    img: Dropper,
    page: '/dropper',
  },
  {
    id: 5,
    title: 'Easy Slider Component',
    component: 'Easy Slider',
    description: `is simple component that can create a simple image slider
    with a simple hover animation.
    It takes a title prop and passes the content as children`,
    img: EasySlider,
    page: '/e-slider',
  },
];
