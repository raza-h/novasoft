import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import fonts from '../assets/fonts'
import show from '../assets/icons/show.svg'

const FAQ = ({ question, answer }) => {
  
  const [height, setHeight] = useState(0);

  return (
    <HStack
        w={'100%'}
        justifyContent={'space-between'}
        background={'brand.card'}
        paddingX={8}
        paddingY={4}
        rounded={'lg'}
        alignItems={'flex-start'}
    >
        <VStack
            fontFamily={fonts.body}
            fontSize={14}
            color={'brand.light'}
        >
            <Text
                fontSize={16}
                fontFamily={fonts.fancy}
                fontWeight={100}
                w={'100%'}
            >
                { question }
            </Text>
            <Text
                height={height}
                transition={'height 200ms linear'}
                overflow={'hidden'}
                color={'gray.300'}
            >
                { answer }
            </Text>
        </VStack>
        <Image
            cursor={'pointer'}
            src={show}
            width={4}
            onClick={(e) =>
            {
                if (height === 0)
                {
                    e.currentTarget.style.animation = "rotate-right-45 200ms";
                    e.currentTarget.style.transform = "rotate(45deg)";
                    setHeight(20)
                }

                else
                {
                    e.currentTarget.style.animation = "rotate-right-90 200ms";
                    e.currentTarget.style.transform = "rotate(90deg)";
                    setHeight(0);
                }
            }}
        />
    </HStack>
  )
}

export default FAQ