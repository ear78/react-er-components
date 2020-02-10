# HOVER PODS OPTIONS

***@podData:*** **Array**

imported config array or data driven values from server. Pass in background image, background color to match image tone, text color, and one word if you want text.

Example:
```
export const podData = [
  { podBgImage: building,
    podBgColor: '#c50043ad',
    podTextColor: '#fff',
    podText: 'Hello'
  },
  { podBgImage: snowGhosts,
    podBgColor: '#1663908c',
    podTextColor: '#fff',
    podText: 'I\'m'
  },
  { podBgImage: greyBuilding,
    podBgColor: '#3f580780',
    podTextColor: '#fff',
    podText: 'A'
  },
  { podBgImage: about,
    podBgColor: '#33394887',
    podTextColor: '#fff',
    podText: 'Hover Pod'
  },
]

<HoverPods podData={podData}/>

```
