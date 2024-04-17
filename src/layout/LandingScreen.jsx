import { VStack } from '@chakra-ui/react'
import React from 'react'

const LandingScreen = ({ id, children, ...props }) => {
  return (
    <VStack
        w={'100%'}
        background={'transparent !important'}
        id={id}
        {...props}
    >
        {children}
    </VStack>
  )
}

export default LandingScreen