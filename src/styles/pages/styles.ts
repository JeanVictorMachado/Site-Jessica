import { Box, chakra, Flex } from '@chakra-ui/react'

export const Container = chakra(Flex, {
  baseStyle: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const HeaderContainer = chakra(Flex, {
  baseStyle: {
    maxWidth: '1100px',
    height: '100%',
    margin: 'auto',
  },
})

export const Content = chakra(Box, {
  baseStyle: {
    width: '100%',
    backgroundImage: 'linear-gradient(210deg, #040c18, #3C0816 220%)',
  },
})

export const PersonalImageContent = chakra(Box, {
  baseStyle: {
    maxWidth: '1200px',
    height: ['100%', '100%', '100%'],
    margin: 'auto',
    paddingX: '32px',
    paddingBottom: '70px',
  },
})

export const VSLContent = chakra(Box, {
  baseStyle: {
    width: '100%',
    backgroundImage: 'linear-gradient(210deg, #f49867, #fff 220%)',
  },
})
