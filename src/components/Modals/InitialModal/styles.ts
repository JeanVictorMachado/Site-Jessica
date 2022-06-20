import { Text, chakra, ModalContent, ModalCloseButton, ModalBody, Flex } from '@chakra-ui/react'

export const ModalCloseButtonChakra = chakra(ModalCloseButton, {
  baseStyle: {
    color: '#FFF',
    top: 2.5,
  },
})

export const ModalContentChakra = chakra(ModalContent, {
  baseStyle: {
    maxWidth: '500px',
    marginX: 4,
    borderRadius: 16,
  },
})

export const ModalBodyChakra = chakra(ModalBody, {
  baseStyle: {
    padding: ['32px', '32px', '32px'],
    borderRadius: 16,
    background: 'linear-gradient(89.97deg, #f49867 1.84%, #FFF 102.67%)',
  },
})

export const TitleModal = chakra(Text, {
  baseStyle: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 6,
    lineHeight: '26px',
    marginTop: -2,
  },
})

export const ButtonModal = chakra(Flex, {
  baseStyle: {
    width: '100%',
    height: '70px',
    fontSize: 22,
    fontWeight: 700,
    background: 'linear-gradient(210deg, #040c18, #3C0816 220%)',
    color: '#B6B6B6',
    borderRadius: 16,
    paddingX: 4,
    lineHeight: '24px',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    filter: 'brightness(2)',
    cursor: 'pointer',
    _hover: {
      transition: 'all ease .3s',
      filter: 'brightness(3)',
    },
  },
})

export const IconButton = chakra(Flex, {
  baseStyle: {
    marginTop: 0.5,
    marginRight: 3,
  },
})
