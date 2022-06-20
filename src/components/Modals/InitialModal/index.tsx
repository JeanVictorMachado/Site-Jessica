import { Flex, Modal, ModalOverlay, Text } from '@chakra-ui/react'

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
          <Text fontSize={24} fontWeight={700} marginBottom={6} lineHeight='26px' marginTop={-2}>
            Selecione uma das opçôes
          </Text>

          <Flex
            width='100%'
            height='70px'
            fontSize={22}
            fontWeight={700}
            background='linear-gradient(210deg, #040c18, #3C0816 220%)'
            color='#B6B6B6'
            borderRadius={16}
            marginBottom={4}
            paddingX={4}
            lineHeight='24px'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            filter='brightness(2)'
            cursor='pointer'
            onClick={() => handleClick()}
            _hover={{
              transition: 'all ease .3s',
              filter: 'brightness(3)',
            }}
          >
            <Flex marginTop={0.5} marginRight={3}>
              <FaArrowAltCircleRight color='#B6B6B6' />
            </Flex>
            Estou iniciando no Market Digital!
          </Flex>

          <Flex
            width='100%'
            height='70px'
            fontSize={22}
            fontWeight={700}
            background='linear-gradient(210deg, #040c18, #3C0816 220%)'
            color='#B6B6B6'
            borderRadius={16}
            paddingX={4}
            lineHeight='24px'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            filter='brightness(2)'
            cursor='pointer'
            onClick={() => handleClick()}
            _hover={{
              transition: 'all ease .3s',
              filter: 'brightness(3)',
            }}
          >
            <Flex marginTop={0.5} marginRight={3}>
              <FaArrowAltCircleRight color='#B6B6B6' />
            </Flex>
            Já faturo com Market Digital!
          </Flex>
        </S.ModalBodyChakra>
      </S.ModalContentChakra>
    </Modal>
  )
}
