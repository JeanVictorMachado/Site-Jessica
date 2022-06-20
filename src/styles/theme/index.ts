import { extendTheme, theme } from '@chakra-ui/react'

const customTheme = {
  ...theme,
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    ...theme.colors,
    backgroundLight: {
      100: '#F7F7F7',
      200: '#EBEBEB',
      300: '#DBDFDB',
    },
    backgroundDark: {
      100: '#383838',
      200: '#313131',
      300: '#040c18',
    },
    textLight: {
      200: '#383838',
      300: '#202020',
      400: '#131313',
    },
    textDark: {
      100: '#C6C6C6',
      200: '#F8F8F8',
    },
    borderLight: {
      100: '#DBDFDB',
    },
    borderDark: {
      100: '#3F3F3F',
    },
    iconLight: {
      200: '#383838',
    },
    iconDark: {
      200: '#E8E8E8',
    },
  },
}

export default extendTheme(customTheme)
