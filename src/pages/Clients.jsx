import React from 'react'
import LandingScreen from '../layout/LandingScreen'
import CustomHeading from '../components/CustomHeading'
import { Flex, Grid, Text } from '@chakra-ui/react'
import Card from '../components/Card'

const Clients = () => {

    const countries = [
        'Italy',
        'UK',
        'France',
        'UAE',
        'Sweden',
        'Germany',
        'Saudi Arabia'
    ]
    return (
        <LandingScreen 
            id={'clients'}
            padding={[2, 4, 6, 32]}
            spacing={10}
            h={['100vh', '100vh', 'fit-content']}
            justifyContent={'center'}
        >
            <Text
                fontWeight={100}
                fontSize={24}
                color={'brand.light'}
                textAlign={'center'}
            >    
                We Have Our Clients From All Around The Globe
            </Text>
            <Text
                w={'100%'}
                background={'brand.main'}
                h={0.6} 
            /> 
            <Flex
                justifyContent={'center'}
                flexWrap={'wrap'}
                columnGap={10}
                color={'brand.main'}
            >
            {
                countries.map(country => (
                    <Text
                        key={country}
                        fontFamily={'Monoton'}
                        fontSize={40}
                    >
                        {country.toUpperCase()}
                    </Text>
                ))
            }
            </Flex>
        </LandingScreen>
    )
}

export default Clients