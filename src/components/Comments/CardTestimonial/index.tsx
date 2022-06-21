import { Testimonial } from './Testimonial'

import * as S from './styles'

export type TestimonialProps = {
  image: string
  name: string
  testimonial: string
  likes: string
  testimonialTime: string
  response?: TestimonialProps[]
}

interface CardTestimonialProps {
  testimonials: TestimonialProps[]
}

export const CardTestimonial = ({ testimonials }: CardTestimonialProps) => {
  return (
    <S.CardTestimonialContainer>
      <S.CardTestimonialTitle>{`${9} comentários`}</S.CardTestimonialTitle>

      <S.CardTestimonialContent>
        {testimonials?.map((item, index) => (
          <Testimonial
            key={`${item.name}-${index}`}
            image={item.image}
            name={item.name}
            testimonial={item.testimonial}
            testimonialTime={item.testimonialTime}
            likes={item.likes}
            response={item.response}
          />
        ))}
      </S.CardTestimonialContent>
    </S.CardTestimonialContainer>
  )
}
