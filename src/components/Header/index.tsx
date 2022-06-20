import { Box, useMediaQuery } from '@chakra-ui/react'
import { useState } from 'react'
import { SideBar } from '../Modals/SideBar'
import { Menu } from '../Svgs/Menu'

import * as S from './styles'

export const Header = () => {
  const [isSideBar, setIsSideBar] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLargerThanHD, _isDisplayingInBrowser] = useMediaQuery([
    '(max-width: 770px)',
    '(display-mode: browser)',
  ])

  return (
    <S.Container>
      <S.LogoContent>Logo</S.LogoContent>

      <S.RightContent spacing={[4, 8, 8]}>
        {isLargerThanHD ? (
          <Box onClick={() => setIsSideBar(true)} cursor='pointer'>
            <Menu />
          </Box>
        ) : (
          <>
            <S.OptionRightContent>Início</S.OptionRightContent>

            <S.OptionRightContent>Sobre</S.OptionRightContent>

            <S.OptionRightContent>Contato</S.OptionRightContent>
          </>
        )}
      </S.RightContent>

      <SideBar isOpen={isSideBar} onClose={() => setIsSideBar(false)} />
    </S.Container>
  )
}
