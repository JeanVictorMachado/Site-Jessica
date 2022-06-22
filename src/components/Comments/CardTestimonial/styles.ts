import { chakra, Box, Text } from '@chakra-ui/react'

export const CardTestimonialContainer = chakra(Box, {
  baseStyle: {
    width: '100%',
    borderRadius: '16px',
    padding: '32px 32px 17px 32px',
    background: '#F0F0F0',
    boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.3)',
  },
})

export const CardTestimonialTitle = chakra(Text, {
  baseStyle: {
    fontSize: '18px',
    paddingBottom: '12px',
    color: 'rgb(32, 32, 32)',
    borderBottom: '1px solid rgb(190, 190, 190)',
  },
})

export const CardTestimonialContent = chakra(Box, {
  baseStyle: {
    paddingTop: '16px',
  },
})
