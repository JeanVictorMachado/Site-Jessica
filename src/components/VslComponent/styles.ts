import { chakra, Box, AspectRatio, Text } from '@chakra-ui/react'

export const Container = chakra(Box, {
  baseStyle: {
    maxWidth: '700px',
    margin: 'auto',
    paddingX: '32px',
    marginBottom: '16px',
  },
})

export const VSLTitle = chakra(Text, {
  baseStyle: {
    marginTop: ['60px'],
    marginBottom: 4,
    fontSize: [28, 28, 28],
    lineHeight: 8,
    textAlign: 'center',
    fontWeight: 800,
    background: 'linear-gradient(210deg, #040c18, #3C0816 220%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
})

export const AspectRatioBox = chakra(AspectRatio, {
  baseStyle: {
    maxWidth: '700px',
  },
})
