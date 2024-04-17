import React from 'react'
import LandingScreen from '../layout/LandingScreen'
import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import fonts from '../assets/fonts'
import show from '../assets/icons/show.svg'
import FAQ from '../components/FAQ'

const FAQs = () => {
  
  const faqs = [
    {
        question: 'how to approach Novasoft?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod augue sit amet enim vehicula, quis lobortis libero accumsan.'
    },
    {
        question: 'how to approach Novasoft?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod augue sit amet enim vehicula, quis lobortis libero accumsan.'
    },
    {
        question: 'how to approach Novasoft?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod augue sit amet enim vehicula, quis lobortis libero accumsan.'
    },
    {
        question: 'how to approach Novasoft?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod augue sit amet enim vehicula, quis lobortis libero accumsan.'
    }
  ]

  return (
    <LandingScreen
        minH={['60vh', '100vh', '60vh']}
        paddingX={[4, 5, 6, 72]}
        justifyContent={'center'}
        id={'FAQs'}
    >
        <Text
            fontFamily={fonts.title}
            fontSize={20}
            color={'brand.light'}
            fontWeight={800}
            w={'100%'}
        >
            FAQS
        </Text>
        <VStack
            marginTop={4}
            w={'100%'}
            spacing={3}
        >
            {
                faqs.map(({question, answer}) => <FAQ question={question} answer={answer}/>)
            }
        </VStack>
    </LandingScreen>
  )
}

export default FAQs