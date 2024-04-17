import { GridItem, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Card = ({ title, description }) => {
  return (
    <GridItem
        height={[80, 80, 80, 64, 80]}
        bg={'brand.card'}
        rounded={'lg'}
        display={'flex'}
        flexDir={'column'}
        justifyContent={'flex-end'}
        alignItems={'center'}
        padding={[10, 10, 10, 5, 10]}
        border={'1px'}
        borderColor={'brand.border'}
        gap={2}
    >
        <Heading
            color={'brand.main'}
            fontSize={20}
            width={'100%'}
        >
            {title.split(' ')[0]} <span style={{color: '#FFFFFF'}}>{title.slice(title.split(' ')[0].length, title.length)}</span>
        </Heading>   
        <Text
            color={'brand.light'}
            fontWeight={100}
            fontSize={12}
        >
            {description}
        </Text>
    </GridItem>
  )
}

export default Card