import { Box, chakra, Flex, Text } from '@chakra-ui/react'

export const Container = chakra(Flex, {
  baseStyle: {
    maxWidth: '1150px',
    margin: 'auto',
    padding: ['70px 32px 50px 0px', '100px 32px 70px 0px', '100px 32px 70px 0px'],
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
    maxWidth: ['350px', '640px', '640px'],
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

export const TestimonialImageBox = chakra(Box, {
  baseStyle: {
    height: '100%',
    maxWidth: '300px',
    marginLeft: 8,
    marginBottom: 8,
  },
})
