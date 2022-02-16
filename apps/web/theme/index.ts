// 1. Import `createTheme`
import { createTheme } from "@nextui-org/react"

// 2. Call `createTheme` and pass your custom values
export const theme = createTheme({
  type: "custom",
  theme: {
      shadows: {
    xs: '-4px 0 4px rgb(250 114 104 / 5%);',
    sm: '0 5px 20px -5px rgba(250 114 104, 0.1)',
    md: '0 8px 30px rgba(250 114 104, 0.15)',
    lg: '0 30px 60px rgba(250 114 104, 0.15)',
    xl: '0 40px 80px rgba(250 114 104, 0.25)'
  },
    colors: {
      // brand colors
      primaryLight: '$green200',
      primary: '#fa7268',
      primaryDark: '$green600',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      // link: '#fa7268', // pantone - living coral
      link: '#0e1111', // soft black

      // you can also create your own color
      myColor: '#ff4ecd'

      // ...  more colors
    },
    space: {},
    fonts: {}
  }
});
// console.log(theme);