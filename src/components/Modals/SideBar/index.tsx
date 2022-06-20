import { Drawer, DrawerBody, DrawerOverlay } from '@chakra-ui/react'

import * as S from './styles'

interface SideBarProps {
  isOpen: boolean
  onClose: () => void
}

export const SideBar = ({ isOpen, onClose }: SideBarProps) => {
  return (
    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
      <DrawerOverlay />

      <S.DrawerContentModal>
        <S.DrawerCloseModal />

        <DrawerBody></DrawerBody>
      </S.DrawerContentModal>
    </Drawer>
  )
}
