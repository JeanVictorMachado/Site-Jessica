import { Image, Link, Text } from '@chakra-ui/react'

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

        <Link
          href='https://www.instagram.com/jessicalopes.jess/'
          isExternal
          display='flex'
          alignItems='center'
          _hover={{
            transition: 'all ease .3s',
            filter: 'brightness(0.9)',
          }}
        >
          <Image src='icon-instagram.svg' alt='Imagem de Jéssica Lopes.' width={12} marginTop={4} />

          <Text color='#E6E6E6' fontSize={18} marginTop={4} marginLeft={2}>
            @jessicalopes.jess
          </Text>
        </Link>

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
