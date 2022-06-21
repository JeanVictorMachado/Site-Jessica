import { Box, Flex, Link, Text } from '@chakra-ui/react'

import { Information } from '../../Svgs/Information'

export const Informations = () => {
  return (
    <Box width='250px' marginTop={12} marginLeft={8}>
      <Flex alignItems='center' marginBottom={6}>
        <Information />
        <Text color='#EBEBEB' fontSize={20} marginLeft={2}>
          Informações
        </Text>
      </Flex>

      <Flex marginTop={-1} flexDirection='column'>
        <Link color='#A4A4A4' marginBottom={4}>
          Início
        </Link>

        <Link color='#A4A4A4' marginBottom={4}>
          Sobre
        </Link>

        <Link color='#A4A4A4' marginBottom={4}>
          Me contate
        </Link>

        <Link color='#A4A4A4' marginBottom={4}>
          Termos de uso
        </Link>

        <Link color='#A4A4A4' marginBottom={4}>
          Política de privacidade
        </Link>
      </Flex>
    </Box>
  )
}
