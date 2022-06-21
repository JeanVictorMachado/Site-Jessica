import { chakra, Box, Flex, Image, Text } from '@chakra-ui/react'

export const Container = chakra(Flex, {
  baseStyle: {
    width: '100%',
    minHeight: '80px',
    marginBottom: '16px',
    display: 'flex',
  },
})

export const PersonalImageContainer = chakra(Box, {
  baseStyle: {
    width: '63px',
  },
})

export const PersonalImage = chakra(Image, {
  baseStyle: {
    width: '55px',
    height: '55px',
    borderRadius: '50%',
  },
})

export const ContentRight = chakra(Box, {
  baseStyle: {
    flex: 1,
    minHeight: '50px',
  },
})

export const PersonalName = chakra(Text, {
  baseStyle: {
    fontWeight: 600,
    paddingBottom: '5px',
    color: 'rgb(46, 60, 138)',
  },
})

export const TestimonialText = chakra(Text, {
  baseStyle: {
    padding: '6px 8px',
    display: 'block',
    lineHeight: '20px',
    borderRadius: '10px',
    color: 'rgb(29, 29, 29)',
    background: '#F2F2F2',
    boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
  },
})

export const BottomContent = chakra(Flex, {
  baseStyle: {
    justifyContent: 'space-between',
  },
})

export const InterationTextContainer = chakra(Flex, {
  baseStyle: {
    fontSize: '12px',
    marginTop: '6px',
    color: 'rgb(46, 60, 138)',
    display: 'flex',
  },
})

export const BottomContentText = chakra(Text, {
  baseStyle: {
    fontSize: '12px',
    marginTop: 0,
  },
})

export const BottomContentIcons = chakra(Flex, {
  baseStyle: {
    minWidth: '50px',
    height: '25px',
    padding: '2px 5px',
    marginTop: '-5px',
    borderRadius: '10px',
    background: '#F2F2F2',
    boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',

    alignItems: 'center',
  },
})

export const BottomContentIcon = chakra(Image, {
  baseStyle: {
    width: '16px',
    marginRight: '3px',
  },
})

export const BottomContentIconText = chakra(Text, {
  baseStyle: {
    fontSize: '13px',
  },
})

export const TestimonialResponseContainer = chakra(Flex, {
  baseStyle: {
    width: '100%',
    minHeight: '50px',
    marginTop: '16px',
    borderLeft: '1px solid rgb(185, 185, 185)',
    paddingLeft: '8px',
  },
})

export const ResponseContent = chakra(Flex, {
  baseStyle: {
    flex: 1,
    minHeight: '50px',
    margin: 0,

    flexDirection: 'column',
  },
})
