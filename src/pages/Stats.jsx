import { HStack, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import LandingScreen from '../layout/LandingScreen'
import fonts from '../assets/fonts'
import StatItem from '../components/StatItem'

const Stats = () => {
  return (
    <LandingScreen
        paddingX={[2, 4, 8, 28]}
        h={['100vh', '100vh', '60vh', 'fit-content']}
        justifyContent={'center'}
    >
        <HStack
            w={'100%'}
            background={'linear-gradient(90deg, rgba(78, 245, 231, 0.5) 0%, rgba(23, 78, 88, 0.5) 29.08%, rgba(2, 11, 30, 0.5) 59.38%, rgba(2, 11, 30, 0.5) 89.68%, rgba(2, 11, 30, 0.5) 114.73%)'}
            color={'brand.light'}
            paddingX={[4, 6, 8, 10]}
            paddingY={[8, 10, 14, 16]}
            rounded={'3xl'}
            fontFamily={fonts.heading}
            justifyContent={['center', 'center', 'space-between']}
            columnGap={[20, 16, 5, 0]}
            rowGap={[12, 10, 5, 0]}
            flexWrap={'wrap'}
        >
            <StatItem title={'Projects'} number={'7+'} />
            <StatItem title={'Clients'} number={'9+'} />
            <StatItem title={'Support'} number={'24/7'} />
            <StatItem title={'Reviews'} number={'5+'} />
        </HStack>
    </LandingScreen>
  )
}

export default Stats