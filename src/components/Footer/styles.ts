import { Box, chakra, Flex, Text } from '@chakra-ui/react'

export const Container = chakra(Box, {
  baseStyle: {
    width: '100%',
    // backgroundImage: 'linear-gradient(210deg, #040c18, #3C0816 220%)',
    backgroundImage: 'linear-gradient(210deg, #040c18, #7B193F)',
  },
})

export const Content = chakra(Flex, {
  baseStyle: {
    width: '100%',
    padding: '40px 70px 50px 50px',

    justifyContent: 'center',
    flexWrap: 'wrap',
  },
})

export const Divider = chakra(Box, {
  baseStyle: {
    height: '1px',
    maxWidth: ['250px', '525px', '1080px'],
    paddingX: '70px',
    margin: 'auto',
    marginTop: 4,
    marginBottom: '70px',
    background: 'rgba(49, 49, 49, .9)',
  },
})

export const CopyrightText = chakra(Text, {
  baseStyle: {
    color: '#A4A4A4',
    textAlign: 'center',
    fontSize: 16,
  },
})

export const CompanyText = chakra(Text, {
  baseStyle: {
    color: '#A4A4A4',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: '70px',
  },
})
