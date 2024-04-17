import { GridItem, Image, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import fonts from '../assets/fonts'

const TeamCard = ({name, title, link, image}) => {
  return (
    <GridItem
        background={'brand.card'}
        roundedTopRight={'18%'}
        roundedBottomLeft={'18%'}
        paddingBottom={4}
        position={'relative'}
    >
        <Link
            href={link}
            target={'_blank'}
        >
            <VStack
                position={'absolute'}
                bottom={24}
                background={'brand.main'}
                paddingY={4}
                paddingX={5}
                right={0}
                roundedBottomLeft={'50%'}
                roundedTopRight={'50%'}
                >
                <Text
                    color={'brand.light'}
                    fontFamily={fonts.heading}
                    fontSize={28}
                    fontWeight={800}
                    >
                    in
                </Text>
            </VStack>
        </Link>
        <Image
            src={image}
        />
        <Text
            marginTop={5}
            fontFamily={fonts.heading}
            fontSize={20}
            color={'brand.light'}
            textAlign={'right'}
            fontWeight={800}
            paddingRight={5}
        >
            {name}
        </Text>
        <Text
            fontFamily={fonts.heading}
            fontSize={20}
            color={'brand.main'}
            textAlign={'right'}
            fontWeight={800}
            paddingRight={5}
        >
            {title}
        </Text>
    </GridItem>
  )
}

export default TeamCard