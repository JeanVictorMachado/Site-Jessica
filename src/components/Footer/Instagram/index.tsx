import { Box, Flex, Text, Image, Link } from '@chakra-ui/react'

import { Instagram as InstagramIcon } from '../../Svgs/Instagram'

export const Instagram = () => {
  return (
    <Box width='250px' marginTop={12} marginLeft={8}>
      <Flex alignItems='center' marginBottom={6}>
        <InstagramIcon />
        <Text color='#EBEBEB' fontSize={20} marginLeft={2}>
          Instagram
        </Text>
      </Flex>

      <Box marginBottom={2} marginTop={-1}>
        <Link href='https://www.instagram.com/jessicalopes.jess/' isExternal color='#A4A4A4'>
          @jessicalopes.jess
        </Link>
      </Box>

      <Flex flexWrap='wrap'>
        <Link href='https://www.instagram.com/p/Ccn3qNdOgrm/' isExternal marginBottom={3}>
          <Image src='post-5.png' alt='' width='70px' borderRadius={10} marginRight={3} />
        </Link>

        <Link href='https://www.instagram.com/p/Cdd0yPWOPV4/' isExternal marginBottom={3}>
          <Image src='post-2.png' alt='' width='70px' borderRadius={10} marginRight={3} />
        </Link>

        <Link href='https://www.instagram.com/p/Cdnwv5buVUg/' isExternal marginBottom={3}>
          <Image src='post-6.png' alt='' width='70px' borderRadius={10} marginRight={3} />
        </Link>

        <Link href='https://www.instagram.com/p/CeTu_cuONVs/' isExternal marginBottom={3}>
          <Image src='post-3.png' alt='' width='70px' borderRadius={10} marginRight={3} />
        </Link>

        <Link href='https://www.instagram.com/p/CfCpXVIPAWc/' isExternal marginBottom={3}>
          <Image src='post-1.png' alt='' width='70px' borderRadius={10} marginRight={3} />
        </Link>

        <Link href='https://www.instagram.com/p/CdEfmdKO_x-/' isExternal marginBottom={3}>
          <Image src='post-4.png' alt='' width='70px' borderRadius={10} marginRight={3} />
        </Link>
      </Flex>
    </Box>
  )
}
