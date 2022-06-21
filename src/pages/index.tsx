import { useEffect, useState } from 'react'
import { Comments } from '../components/Comments'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { InitialModal } from '../components/Modals/InitialModal'
import { PersonalImageContent } from '../components/PersonalImageContent'
import { Testimonial } from '../components/Testimonial'
import { VslComponent } from '../components/VslComponent'

import * as S from '../styles/pages/styles'

export default function Home() {
  const [isInitialModal, setIsInitialModal] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsInitialModal(true)
    }, 2000)
  }, [])

  return (
    <S.Container>
      <S.Content>
        <S.HeaderContainer>
          <Header />
        </S.HeaderContainer>

        <S.PersonalImageContent>
          <PersonalImageContent />
        </S.PersonalImageContent>

        <InitialModal isOpen={isInitialModal} onClose={() => setIsInitialModal(false)} />
      </S.Content>

      <S.VSLContent>
        <VslComponent />
      </S.VSLContent>

      <S.TestimonialContent>
        <Testimonial />
      </S.TestimonialContent>

      <S.CommentsContent>
        <Comments />
      </S.CommentsContent>

      <Footer />
    </S.Container>
  )
}
