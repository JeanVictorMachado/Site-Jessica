import { chakra, Text, Flex, DrawerContent, DrawerCloseButton } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const TitleText = chakra(motion(Text), {
  baseStyle: {
    fontWeight: 600,
    marginTop: -1,
    marginRight: 4,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
})

export const SubTitleText = chakra(motion(Text), {
  baseStyle: {
    marginBottom: 4,
    whiteSpace: 'nowrap',
  },
})

export const IconContainer = chakra(Flex, {
  baseStyle: {
    alignItems: 'center',
    cursor: 'pointer',
  },
})

export const DrawerContentModal = chakra(DrawerContent, {
  baseStyle: {
    height: '100vh',
    backgroundImage: 'linear-gradient(210deg, #040c18, #3C0816 220%)',
  },
})

export const DrawerCloseModal = chakra(DrawerCloseButton, {
  baseStyle: {
    fontSize: 18,
    marginTop: 1,
    color: '#DCDCDC',
  },
})
