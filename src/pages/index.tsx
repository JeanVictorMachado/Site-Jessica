import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { InitialModal } from '../components/Modals/InitialModal'
import { PersonalImageContent } from '../components/PersonalImageContent'

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
    </S.Container>
  )
}
