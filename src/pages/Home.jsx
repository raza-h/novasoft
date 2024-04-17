import React from 'react'
import fonts from '../assets/fonts'
import intro from '../assets/images/intro.svg'
import Sidebar from '../components/Sidebar'
import LandingScreen from '../layout/LandingScreen'
import { HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'

const Home = () => {
    return (
        <LandingScreen id={'home'}>
            <HStack
                marginTop={[10, 10, 10, 0]}
                h={'100vh'}
                background={'transparent !important'}
                w={'100%'}
                justifyContent={['center', 'center', 'center', 'space-around']}
                flexDir={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
                spacing={[20, 20, 20, 0]}
            >
                <VStack
                    alignItems={'flex-start'}
                >
                    <Heading
                        fontFamily={fonts.title}
                        color={'brand.main'}
                        fontSize={[35, 35, 40, 50]}
                        textAlign={'left'}
                    >
                        WE<br />
                        <span style={{ color: 'white' }}>BUILD AI</span><br />
                        SAAS APPS
                    </Heading>
                    <Text
                        fontFamily={fonts.title}
                        color={'brand.light'}
                        fontSize={'18'}
                        fontWeight={200}
                        width={['100%', '100%', '100%', '60%']}
                    >
                        Empowering Innovation through Software Excellence.
                    </Text>
                </VStack>
                <Image
                    w={96}
                    src={intro}
                />
            </HStack>
        </LandingScreen>
    )
}

export default Home