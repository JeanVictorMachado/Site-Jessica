import { Modal, ModalOverlay } from '@chakra-ui/react'

import * as S from './styles'

import { FaArrowAltCircleRight } from 'react-icons/fa'

interface GridIconsModalProps {
  isOpen: boolean
  onClose: () => void
}

export const InitialModal = ({ isOpen, onClose }: GridIconsModalProps) => {
  const handleClick = () => {
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={() => []} isCentered>
      <ModalOverlay />

      <S.ModalContentChakra>
        <S.ModalBodyChakra>
          <S.TitleModal>Selecione uma das opçôes</S.TitleModal>

          <S.ButtonModal marginBottom={4} onClick={() => handleClick()}>
            <S.IconButton>
              <FaArrowAltCircleRight color='#B6B6B6' />
            </S.IconButton>
            Estou iniciando no Market Digital!
          </S.ButtonModal>

          <S.ButtonModal onClick={() => handleClick()}>
            <S.IconButton>
              <FaArrowAltCircleRight color='#B6B6B6' />
            </S.IconButton>
            Já faturo com Market Digital!
          </S.ButtonModal>
        </S.ModalBodyChakra>
      </S.ModalContentChakra>
    </Modal>
  )
}
