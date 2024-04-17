import { Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const StatItem = ({title, number}) => {
  return (
    <VStack>
        <Heading
            fontSize={56}
        >
            {number}
        </Heading>
        <Text
            fontSize={16}
        >
            {title}
        </Text>
    </VStack>
  )
}

export default StatItem