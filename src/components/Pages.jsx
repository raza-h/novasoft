import { Image, Text, VStack } from '@chakra-ui/react'
import pages1 from '../assets/images/pages-left.svg'
import pages2 from '../assets/images/pages-right.svg'
import React from 'react'

const Pages = ({ position }) => {
  return (
    <VStack
        position={'relative'}
    >
        <Image
            src={position === 'left' ? pages1 : pages2}
        />
        <Text
            fontSize={40}
            color={'brand.main'}
            position={'absolute'}
            bottom={14}
        >
            {position === 'left' ? 'Secure App' : 'Maintenance'}
        </Text>
        <Text
            fontSize={40}
            position={'absolute'}
            bottom={0}
            w={'100%'}
            color={'brand.light'}
            textAlign={position === 'left' ? 'left' : 'right'}
        >
            {position === 'left' ? 'Aesthetic UI' : 'Consultancy'}
        </Text>
    </VStack>
  )
}

export default Pages