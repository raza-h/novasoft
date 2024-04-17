import React from 'react'
import LandingScreen from '../layout/LandingScreen'
import CustomHeading from '../components/CustomHeading'
import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import fonts from '../assets/fonts'
import globe from '../assets/images/globe.png'
import corner from '../assets/images/corner.svg'

const About = () => {
    return (
        <LandingScreen 
            id={'about'}
            padding={[2, 4, 6, 32]}
            spacing={10}
            justifyContent={'center'}
        >
            <CustomHeading>
                ABOUT
            </CustomHeading>
            <HStack
                bg={'brand.card'}
                color={'brand.light'}
                rounded={'md'}
                fontFamily={fonts.body}
                fontSize={18}
                fontWeight={100}
                justifyContent={'space-between'}
                paddingX={[10, 12, 16, 5, 20]}
                paddingY={[8, 10, 12, 5, 0]}
            >
                <Text
                    w={['100%', '100%', '100%', '40%']}
                    textAlign={'justify'}
                >
                    Novasoft is a cutting-edge software company specializing in the development of AI-powered applications. Our mission is to leverage the latest advancements in artificial intelligence to create innovative solutions that empower businesses and individuals to achieve their goals more efficiently and effectively.
                </Text>
                <VStack
                    h={96}
                    justifyContent={'center'}
                    position={'relative'}
                    display={['none', 'none', 'none', 'flex']}
                >
                    <Image
                        src={globe}
                        w={72}
                    />
                    <Image
                        src={corner}
                        position={'absolute'}
                        right={-24}
                        bottom={0}
                        w={28}
                    />
                </VStack>
            </HStack>
        </LandingScreen>
    )
}

export default About