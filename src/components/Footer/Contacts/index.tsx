import { Box, Flex, Text } from '@chakra-ui/react'
import { Contatos } from '../../Svgs/Contatos'

import { ImLocation2 } from 'react-icons/im'
import { IoLogoWhatsapp } from 'react-icons/io'
import { SiMinutemailer } from 'react-icons/si'

export const Contacts = () => {
  return (
    <Box width='250px' marginTop={12} marginLeft={8}>
      <Flex alignItems='center' marginBottom={6}>
        <Contatos />
        <Text color='#EBEBEB' fontSize={20} marginLeft={2}>
          Contatos
        </Text>
      </Flex>

      <Flex marginBottom={6}>
        <Box marginRight={3}>
          <ImLocation2 color='#A4A4A4' size={16} />
        </Box>
        <Text color='#A4A4A4' lineHeight={1.2} marginTop={-1} marginRight={3}>
          Rua Osvaldo Alfredo, 254, San Francisco, Cambará - Pr, Brasil
        </Text>
      </Flex>

      <Flex marginBottom={6}>
        <Box marginRight={3}>
          <IoLogoWhatsapp color='#C07852' size={16} />
        </Box>
        <Text color='#C07852' lineHeight={1.2} marginTop={-1}>
          +55 (43) 99664-6913
        </Text>
      </Flex>

      <Flex>
        <Box marginRight={3}>
          <SiMinutemailer color='#C07852' size={16} />
        </Box>
        <Text color='#C07852' lineHeight={1.2} marginTop={-1}>
          jessicamkt@gmail.com
        </Text>
      </Flex>
    </Box>
  )
}
