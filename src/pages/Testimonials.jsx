import React, { useEffect, useState } from 'react'
import LandingScreen from '../layout/LandingScreen'
import { HStack, Heading, Image } from '@chakra-ui/react'
import fonts from '../assets/fonts'
import left from '../assets/icons/left-arrow.svg'
import right from '../assets/icons/right-arrow.svg'
import Testimonial from '../components/Testimonial'

const Testimonials = () => {
    
  const [width, setWidth] = useState(0); 
  const [currIndex, setCurrIndex] = useState(0);

  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
    setCurrIndex(0);
  });

  useEffect(() =>
  {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);

  
  const testimonials = [
    {
        quote: 'I had the best experience with Novasoft.',
        author: 'Henry'
    },
    {
        quote: 'I had the best experience with Novasoft.',
        author: 'Brendon Matt'
    },
    {
        quote: 'I had an amazing experience with Novasoft.',
        author: 'Raza Haider'
    }
  ];

  const moveForward = () =>
  {
    if (width >= 1280)
    {
        if (currIndex + 1 < testimonials.length - 1)
        {
            setCurrIndex((index) => index + 2);
        }
    }

    else
    {
        if (currIndex < testimonials.length - 1)
        {
            setCurrIndex((index) => index + 1);
        }
    }
  }

  const moveBackward=() =>
  {
    if (width >= 1280)
    {
        if (currIndex - 1 > 0)
        {
            setCurrIndex((index) => index - 2);
        }
    }

    else
    {
        if (currIndex > 0)
        {
            setCurrIndex((index) => index - 1);
        }
    }
  }
    
  return (
    <LandingScreen
        justifyContent={'center'}
        h={['60vh', '100vh', '40vh', '100vh']}
        gap={20}
    >
        <Heading
            fontFamily={fonts.title}
            fontWeight={800}
            color={'brand.light'}
        >
            Testimonials
        </Heading>
        <HStack
            w={'100%'}
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <Image
                src={left}
                cursor={'pointer'}
                onClick={moveBackward}
                w={[4, 5, 8, 10]}
            />
            <HStack
                justifyContent={'space-evenly'}
                w={'100%'}
            >
                {
                    width >= 1280 ? 
                        testimonials?.slice(currIndex, currIndex + 2).map(({ quote, author }) => <Testimonial key={author} quote={quote} author={author} />)
                    :
                        testimonials?.slice(currIndex, currIndex + 1).map(({ quote, author }) => <Testimonial key={author} quote={quote} author={author} />)
                }
            </HStack>
            <Image
                src={right}
                cursor={'pointer'}
                onClick={moveForward}
                w={[4, 5, 8, 10]}
            />
        </HStack>
    </LandingScreen>
  )
}

export default Testimonials