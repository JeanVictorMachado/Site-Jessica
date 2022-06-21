import { Box } from '@chakra-ui/react'

import { TestimonialProps } from '..'

import * as S from './styles'

export const Testimonial = ({
  image,
  name,
  testimonial,
  likes,
  testimonialTime,
  response,
}: TestimonialProps) => {
  return (
    <S.Container>
      <S.PersonalImageContainer>
        <S.PersonalImage src={image} alt='Imagem' />
      </S.PersonalImageContainer>

      <S.ContentRight>
        <S.PersonalName>{name}</S.PersonalName>

        <S.TestimonialText>{testimonial}</S.TestimonialText>

        <S.BottomContent>
          <S.InterationTextContainer>
            <S.BottomContentText mr={1}>Curtir</S.BottomContentText>-
            <S.BottomContentText ml={1} mr={1}>
              Responder
            </S.BottomContentText>
            -<S.BottomContentText ml={1}>{testimonialTime}</S.BottomContentText>
          </S.InterationTextContainer>

          <S.BottomContentIcons>
            <S.BottomContentIcon src='images/facebook-like.png' alt='Imagem' />
            <S.BottomContentIcon src='images/facebook-love.png' alt='Imagem' />
            <S.BottomContentIconText>{likes}</S.BottomContentIconText>
          </S.BottomContentIcons>
        </S.BottomContent>

        <Box>
          {response?.map((item, index) => (
            <S.TestimonialResponseContainer key={`${name}-${index}`}>
              <S.PersonalImageContainer>
                <S.PersonalImage src={item.image} alt='Imagem' />
              </S.PersonalImageContainer>

              <S.ResponseContent>
                <S.PersonalName>{item.name}</S.PersonalName>

                <S.TestimonialText>{item.testimonial}</S.TestimonialText>

                <S.BottomContent>
                  <S.InterationTextContainer>
                    <S.BottomContentText mr={1}>Curtir</S.BottomContentText>-
                    <S.BottomContentText ml={1} mr={1}>
                      Responder
                    </S.BottomContentText>
                    -<S.BottomContentText ml={1}>{testimonialTime}</S.BottomContentText>
                  </S.InterationTextContainer>

                  <S.BottomContentIcons>
                    <S.BottomContentIcon src='images/facebook-like.png' alt='Imagem' />
                    <S.BottomContentIcon src='images/facebook-love.png' alt='Imagem' />
                    <S.BottomContentIconText>{likes}</S.BottomContentIconText>
                  </S.BottomContentIcons>
                </S.BottomContent>
              </S.ResponseContent>
            </S.TestimonialResponseContainer>
          ))}
        </Box>
      </S.ContentRight>
    </S.Container>
  )
}
