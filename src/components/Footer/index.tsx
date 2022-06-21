import { Text } from '@chakra-ui/react'
import { Contacts } from './Contacts'
import { Highlights } from './Highlights'
import { Informations } from './Informations'
import { Instagram } from './Instagram'

import * as S from './styles'

export const Footer = () => (
  <S.Container>
    <S.Content>
      <Contacts />

      <Highlights />

      <Informations />

      <Instagram />
    </S.Content>

    <S.Divider />

    <S.CopyrightText>Copyright 2022 Todos os direitos reservados</S.CopyrightText>
    <S.CompanyText>Desenvolvido por tech architecture</S.CompanyText>
  </S.Container>
)
