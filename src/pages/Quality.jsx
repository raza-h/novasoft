import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import pages1 from '../assets/images/pages-left.svg'
import pages2 from '../assets/images/pages-right.svg'
import LandingScreen from '../layout/LandingScreen'
import fonts from '../assets/fonts'
import Pages from '../components/Pages'

const Quality = () => {
  return (
    <LandingScreen
        h={'100vh'}
        justifyContent={'center'}
        fontFamily={fonts.fancy}
    >
        <HStack
            flexDir={['column', 'column', 'column', 'row']}
            justifyContent={'space-around'} 
            spacing={10}
            w={'100%'}
        >
            <Pages position={'left'}/>
            <Pages position={'right'}/>
        </HStack>
        <Text
            fontSize={60}
            color={'brand.light'}
            marginTop={[10, 10, 0, 0]}
            marginBottom={[20, 20, 48, 0]}
        >
            QUALITY
        </Text>
    </LandingScreen>
  )
}

export default Quality