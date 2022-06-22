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
    // backgroundImage: 'linear-gradient(210deg, #040c18, #7B193F)',
    backgroundImage:
      'linear-gradient(rgb(4, 12, 24, .95), rgb(123, 25, 63, .95)), url("fundo-jessica-3.png")',
    backgroundSize: 'cover',
    // background: '#040c18',
    // background: '#7B193F',
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
    // backgroundImage: 'linear-gradient(210deg, #f49867, #fff 220%)',
    backgroundImage:
      'linear-gradient(rgba(225, 225, 225, 0.9), rgba(225, 225, 225, 0.9)), url("fundo-jessica-2.png")',
    backgroundSize: 'cover',
    // background: '#D9D3C1',
  },
})

export const TestimonialContent = chakra(Box, {
  baseStyle: {
    width: '100%',
    height: '100%',
    // backgroundImage: 'linear-gradient(210deg, #040c18, #3C0816 220%)',
    backgroundImage: 'linear-gradient(210deg, #040c18, #7B193F)',
  },
})

export const CommentsContent = chakra(Box, {
  baseStyle: {
    width: '100%',
    height: '100%',
    // backgroundImage: 'linear-gradient(210deg, #f49867, #fff 220%)',
    // background: 'rgba(225, 225, 225, 1)',
    backgroundImage:
      'linear-gradient(rgba(225, 225, 225, 0.9), rgba(225, 225, 225, 0.9)), url("fundo-jessica-3.png")',
    backgroundSize: 'cover',
  },
})
