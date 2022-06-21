import { Box, chakra, Flex, Text } from '@chakra-ui/react'

export const Container = chakra(Box, {
  baseStyle: {
    width: '100%',
    backgroundImage: 'linear-gradient(210deg, #040c18, #3C0816 220%)',
  },
})

export const Content = chakra(Flex, {
  baseStyle: {
    width: '100%',
    padding: '40px 70px 50px 50px',
    backgroundImage: 'linear-gradient(210deg, #040c18, #3C0816 220%)',

    justifyContent: 'center',
    flexWrap: 'wrap',
  },
})

export const Divider = chakra(Box, {
  baseStyle: {
    marginX: 12,
    marginTop: 4,
    marginBottom: '70px',
    borderBottom: '1px solid #646464',
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
