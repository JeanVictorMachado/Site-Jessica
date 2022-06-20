import { chakra, Box, Image, Flex, Text, Link } from '@chakra-ui/react'

export const Container = chakra(Flex, {
  baseStyle: {
    width: '100%',
    marginTop: '50px',

    flexDirection: ['column-reverse', 'column-reverse', 'row'],
  },
})

export const LeftContent = chakra(Flex, {
  baseStyle: {
    width: ['100%', '100%', '50%'],
    marginTop: ['32px', '32px', '0px'],
    marginLeft: ['0px', '0px', '0px'],

    justifyContent: 'center',
    textAlign: 'center',
  },
})

export const TextContainer = chakra(Flex, {
  baseStyle: {
    width: ['100%', '100%', '70%'],

    flexDirection: 'column',
    justifyContent: 'center',
  },
})

export const PresentationText = chakra(Text, {
  baseStyle: {
    fontSize: ['30px', '36px', '40px'],
    fontWeight: 700,
    lineHeight: '46px',
    background: 'linear-gradient(89.97deg, #f49867 1.84%, #FFF 102.67%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: 4,
  },
})

export const ResumeText = chakra(Text, {
  baseStyle: {
    fontSize: ['22px', '22px', '22px'],
    fontWeight: 700,
    color: '#E6E6E6',
    textAlign: 'initial',
  },
})

export const LinkInstaContainer = chakra(Link, {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    _hover: {
      transition: 'all ease .3s',
      filter: 'brightness(0.9)',
    },
  },
})

export const ImageInsta = chakra(Image, {
  baseStyle: {
    width: 12,
    marginTop: 4,
  },
})

export const ImageText = chakra(Text, {
  baseStyle: {
    color: '#E6E6E6',
    fontSize: 18,
    marginTop: 4,
    marginLeft: 2,
  },
})

export const GirlImage = chakra(Image, {
  baseStyle: {
    marginTop: ['12px'],
  },
})

export const RightContent = chakra(Flex, {
  baseStyle: {
    width: ['100%', '100%', '50%'],
    justifyContent: ['center'],
  },
})

export const ImageContainer = chakra(Flex, {
  baseStyle: {
    width: ['200px', '369px', '369px'],
    position: 'relative',
  },
})

export const ImageContent = chakra(Image, {
  baseStyle: {
    zIndex: 2,
  },
})

export const ShadowImage = chakra(Box, {
  baseStyle: {
    width: ['158px', '295px', '295px'],
    height: '30px',
    marginLeft: ['14px', '25px', '25px'],
    background: 'linear-gradient(0deg, #040c18 10%, transparent)',
    position: 'absolute',
    bottom: -1,
    zIndex: 3,
  },
})
