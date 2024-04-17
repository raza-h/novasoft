import { Text, VStack } from '@chakra-ui/react'
import React from 'react'
import fonts from '../assets/fonts'

const CustomHeading = ({children}) => {
  return (
    <VStack
      w={'100%'}
      alignItems={'flex-start'}
    >
      <Text
        fontFamily={fonts.heading}
        color={'brand.light'}
        fontSize={24}
        fontWeight={700}
      >   
        {children}
      </Text>
      <Text 
        width={16}
        height={1}
        bg={'brand.main'}
      />
    </VStack>
  )
}

export default CustomHeading