import { Box, Image } from '@chakra-ui/react'

import * as S from './styles'

export const Testimonial = () => (
  <S.Container>
    <S.TitleContainer>
      <S.TestimonialTitle>
        Veja o depoimento de algumas pessoas que já ajudei a ganhar dinheiro na internet
      </S.TestimonialTitle>
    </S.TitleContainer>

    <Box height='100%' maxWidth='300px' marginLeft={8} marginBottom={8}>
      <Image src='testemunha-6.jpeg' alt='' marginBottom={8} />

      <Image src='testemunha-3.jpeg' alt='' />
    </Box>

    <Box height='100%' maxWidth='300px' marginLeft={8} marginBottom={8}>
      <Image src='testemunha-2.jpeg' alt='' />
    </Box>

    <Box height='100%' maxWidth='300px' marginLeft={8} marginBottom={8}>
      <Image src='testemunha-5.jpeg' alt='' />
    </Box>

    <Box height='100%' maxWidth='300px' marginLeft={8} marginBottom={8}>
      <Image src='testemunha-10.jpeg' alt='' marginBottom={8} />
      <Image src='testemunha-1.jpeg' alt='' />
    </Box>

    <Box height='100%' maxWidth='300px' marginLeft={8} marginBottom={8}>
      <Image src='testemunha-8.jpeg' alt='' />
    </Box>

    <Box height='100%' maxWidth='300px' marginLeft={8} marginBottom={8}>
      <Image src='testemunha-7.jpeg' alt='' marginBottom={8} />
      <Image src='testemunha-4.jpeg' alt='' />
    </Box>

    <Box height='100%' maxWidth='300px' marginLeft={8} marginBottom={8}>
      <Image src='testemunha-9.jpeg' alt='' />
    </Box>

    <Box height='100%' maxWidth='300px' marginLeft={8} marginBottom={8}>
      <Image src='testemunha-11.jpeg' alt='' marginBottom={8} />
      <Image src='testemunha-12.jpeg' alt='' />
    </Box>
  </S.Container>
)
