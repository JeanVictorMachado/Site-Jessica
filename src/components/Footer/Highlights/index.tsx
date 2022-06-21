import { Box, Flex, Text, Image } from '@chakra-ui/react'

import { Highlight } from '../../Svgs/Highlight'

export const Highlights = () => {
  return (
    <Box width='250px' marginTop={12} marginLeft={8}>
      <Flex alignItems='center' marginBottom={6}>
        <Highlight />
        <Text color='#EBEBEB' fontSize={20} marginLeft={2}>
          Destaques
        </Text>
      </Flex>

      <Flex marginBottom={6}>
        <Image
          src='primeira-venda.jpg'
          width='80px'
          height='58px'
          borderRadius={10}
          marginRight={3}
        />

        <Text color='#A4A4A4' lineHeight={1.2} marginTop={-1}>
          Faça sua primeira venda como afiliado em 7 dias
        </Text>
      </Flex>

      <Flex>
        <Image
          src='atrair-vendas.jpg'
          width='80px'
          height='58px'
          borderRadius={10}
          marginRight={3}
        />

        <Text color='#A4A4A4' lineHeight={1.2} marginTop={-1}>
          Aprenda a vender todo dia como afiliado digital
        </Text>
      </Flex>
    </Box>
  )
}
