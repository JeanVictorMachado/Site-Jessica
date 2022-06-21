import { chakra, Box } from '@chakra-ui/react'

export const Container = chakra(Box, {
  baseStyle: {
    maxWidth: '800px',
    margin: 'auto',
    paddingX: '16px',
    marginTop: ['70px', '100px', '100px'],
    marginBottom: '100px',
  },
})
