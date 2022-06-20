import { Box, chakra, Flex, HStack, Text } from '@chakra-ui/react'

export const Container = chakra(Flex, {
  baseStyle: {
    width: '100%',
    paddingTop: ['12px', '24px', '24px'],
    paddingX: ['16px', '32px', '32px'],

    justifyContent: ['space-between'],
    alignItems: ['center'],
  },
})

export const LogoContent = chakra(Box, {
  baseStyle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 600,
  },
})

export const RightContent = chakra(HStack, {
  baseStyle: {
    flexDirection: 'row',
  },
})

export const OptionRightContent = chakra(Text, {
  baseStyle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 600,
    borderBottom: '3px solid #f49867',
    cursor: 'pointer',

    _hover: {
      transition: 'all ease .3s',
      filter: 'brightness(0.9)',
    },
  },
})
