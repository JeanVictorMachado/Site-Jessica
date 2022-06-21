import { useMemo } from 'react'
import { CardTestimonial, TestimonialProps } from './CardTestimonial'

import testimonialScripts from '../../externalData/testimonial_1.json'

import * as S from './styles'

export const Comments = () => {
  const testimonial = useMemo(() => {
    return testimonialScripts as TestimonialProps[]
  }, [])

  return (
    <S.Container>
      <CardTestimonial testimonials={testimonial} />
    </S.Container>
  )
}
