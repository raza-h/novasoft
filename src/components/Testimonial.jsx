import { Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import fonts from '../assets/fonts'
import quotes from '../assets/icons/quote.svg'

const Testimonial = ({ quote, author }) => {
  return (
    <VStack 
        fontFamily={fonts.title}
        color={'brand.light'}
        background={'brand.card'}
        padding={10}
        paddingBottom={[4, 5, 6, 10]}
        border={'1px solid'}
        borderColor={'brand.border'}
        rounded={'xl'}
        position={'relative'}
    >
        <Image 
            src={quotes}
            position={'absolute'}
            top={-8}
            left={10}
            width={16}
        />
        <Text
            fontSize={[14, 14, 20]}
        >
            {quote}
        </Text>
        <Text
            w={'100%'}
            textAlign={'right'}
            fontWeight={200}
            fontSize={[10, 12, 16]}
        >
            <em>{author}</em>
        </Text>
    </VStack>
  )
}

export default Testimonial