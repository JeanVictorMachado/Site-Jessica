import { Image } from '@chakra-ui/react'

import * as S from './styles'

export const Testimonial = () => (
  <S.Container>
    <S.TitleContainer>
      <S.TestimonialTitle>
        Veja o depoimento de algumas pessoas que já ajudei a ganhar dinheiro na internet
      </S.TestimonialTitle>
    </S.TitleContainer>

    <S.TestimonialImageBox>
      <Image src='testemunha-6.jpeg' alt='' marginBottom={8} />
      <Image src='testemunha-3.jpeg' alt='' />
    </S.TestimonialImageBox>

    <S.TestimonialImageBox>
      <Image src='testemunha-2.jpeg' alt='' />
    </S.TestimonialImageBox>

    <S.TestimonialImageBox>
      <Image src='testemunha-15.jpeg' alt='' />
    </S.TestimonialImageBox>

    <S.TestimonialImageBox>
      <Image src='testemunha-10.jpeg' alt='' marginBottom={8} />
      <Image src='testemunha-1.jpeg' alt='' />
    </S.TestimonialImageBox>

    <S.TestimonialImageBox>
      <Image src='testemunha-8.jpeg' alt='' />
    </S.TestimonialImageBox>

    <S.TestimonialImageBox>
      <Image src='testemunha-7.jpeg' alt='' marginBottom={8} />
      <Image src='testemunha-4.jpeg' alt='' />
    </S.TestimonialImageBox>

    <S.TestimonialImageBox>
      <Image src='testemunha-9.jpeg' alt='' />
    </S.TestimonialImageBox>

    <S.TestimonialImageBox>
      <Image src='testemunha-11.jpeg' alt='' marginBottom={8} />
      <Image src='testemunha-12.jpeg' alt='' />
    </S.TestimonialImageBox>

    <S.TestimonialImageBox>
      <Image src='testemunha-5.jpeg' alt='' />
    </S.TestimonialImageBox>
  </S.Container>
)
