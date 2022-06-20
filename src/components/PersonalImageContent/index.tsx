import { Image } from '@chakra-ui/react'

import * as S from './styles'

export const PersonalImageContent = () => (
  <S.Container>
    <S.LeftContent>
      <S.TextContainer>
        <S.PresentationText textAlign='initial'>
          Entenda como eu ganho dinheiro sem sair de casa usando apenas o celular
        </S.PresentationText>

        <S.ResumeText>Oie! Sou a Jéssica Lopes</S.ResumeText>

        <S.ResumeText fontSize={20}>Me aconpanhe no Instagram</S.ResumeText>

        <S.LinkInstaContainer href='https://www.instagram.com/jessicalopes.jess/' isExternal>
          <Image src='icon-instagram.svg' alt='Imagem de Jéssica Lopes.' />

          <S.ImageText>@jessicalopes.jess</S.ImageText>
        </S.LinkInstaContainer>

        <S.GirlImage src='menina-no-sofa-2.png' alt='Menina sentada no sofá.' />
      </S.TextContainer>
    </S.LeftContent>

    <S.RightContent>
      <S.ImageContainer>
        <S.ImageContent src='imagen-jessica.png' alt='Imagem de Jéssica Lopes.' />

        <S.ShadowImage />
      </S.ImageContainer>
    </S.RightContent>
  </S.Container>
)
