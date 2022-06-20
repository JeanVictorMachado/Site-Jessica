import * as S from './styles'

export const Header = () => (
  <S.Container>
    <S.LogoContent>Logo</S.LogoContent>

    <S.RightContent spacing={[4, 8, 8]}>
      <S.OptionRightContent>Início</S.OptionRightContent>

      <S.OptionRightContent>Sobre</S.OptionRightContent>

      <S.OptionRightContent>Contato</S.OptionRightContent>
    </S.RightContent>
  </S.Container>
)
