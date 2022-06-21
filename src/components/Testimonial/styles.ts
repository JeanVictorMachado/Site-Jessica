import { Box, chakra, Flex, Text } from '@chakra-ui/react'

export const Container = chakra(Flex, {
  baseStyle: {
    maxWidth: '1150px',
    margin: 'auto',
    padding: ['70px 32px 70px 0px', '100px 32px 100px 0px', '100px 32px 100px 0px'],
    justifyContent: ['center'],
    flexWrap: 'wrap',
  },
})

export const TitleContainer = chakra(Box, {
  baseStyle: {
    width: '100%',
  },
})

export const TestimonialTitle = chakra(Text, {
  baseStyle: {
    maxWidth: '640px',
    margin: 'auto',
    paddingLeft: '32px',
    marginBottom: 8,
    fontSize: [28, 28, 28],
    lineHeight: 8,
    textAlign: 'center',
    fontWeight: 800,
    background: 'linear-gradient(89.97deg, #f49867 1.84%, #FFF 102.67%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
})