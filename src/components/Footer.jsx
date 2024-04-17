import { HStack, Image, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/icons/logo.png'

const Footer = () => {
  return (
    <VStack
        color={'brand.light'}
        fontWeight={100}
        fontSize={14}
    >
        <Link
            href={'#home'}
        >
            <Image
                src={logo}
                marginY={5}
                w={48}
            />
        </Link>
        <HStack
            flexWrap={'wrap'}
            justifyContent={'center'}
            columnGap={10}
        >
        <Link
            cursor={'pointer'}
            _hover={{
                textDecor: 'none',
                color: 'brand.main'
            }}
            href={'#home'}
        >
            Home
        </Link>
        <Link
            cursor={'pointer'}
            _hover={{
                textDecor: 'none',
                color: 'brand.main'
            }}
            href={'#about'}
        >
            About
        </Link>
        <Link 
            cursor={'pointer'}
            _hover={{
                textDecor: 'none',
                color: 'brand.main'
            }}
            href={'#services'}
        >
            Services
        </Link>
        <Link 
            cursor={'pointer'}
            _hover={{
                textDecor: 'none',
                color: 'brand.main'
            }}
            href={'#clients'}
        >
            Clients
        </Link>
        <Link 
            cursor={'pointer'}
            _hover={{
                textDecor: 'none',
                color: 'brand.main'
            }}
            href={'#'}
        >
            Terms and Conditions
        </Link>
        <Link 
            cursor={'pointer'}
            _hover={{
                textDecor: 'none',
                color: 'brand.main'
            }}
            href={'#'}
        >
            Privacy Policy
        </Link>
        </HStack>
        <Text
            marginTop={5}
        >   
            All rights reserved by Novasoft Limited
        </Text>
    </VStack>
  )
}

export default Footer