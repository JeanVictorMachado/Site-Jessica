import { chakra, ModalContent, ModalCloseButton, ModalBody } from '@chakra-ui/react'

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
