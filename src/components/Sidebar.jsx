import { useEffect, useState } from 'react'
import logo from '../assets/icons/logo.png'
import menu from '../assets/icons/menu.svg'
import close from '../assets/icons/close.svg'
import { HStack, Image, Link, Text } from '@chakra-ui/react'
import fonts from '../assets/fonts'

const Sidebar = () => {

  const [left, setLeft] = useState('-100%');
  const toggleSidebar = () => {left[0] === '-' ? setLeft('0%') : setLeft('-100%')};
  const [width, setWidth] = useState(0);

  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
    setCurrIndex(0);
  });

  useEffect(() =>
  {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);

  useEffect(() =>
  {
    left[0] !== '-' && width < 1024 ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto";

    return () => {
        document.body.style.overflowY = "auto";
    }
  }, [left]);

  return (
    <HStack 
        w={'100%'}
        paddingY={4}
        justifyContent={'space-between'}
        alignItems={'center'}
        position={'fixed'}
        paddingX={[2, 4, 8, 20]}
        background={'brand.bg'}
        zIndex={10}
    >
        <Link
            href={'#home'}
        >
            <Image
                src={logo}
                w={28}
            />
        </Link>
        <HStack
            spacing={12}
            bg={['#060514C1', '#060514C1', '#060514C1', 'transparent']}
            fontFamily={fonts.heading}
            fontSize={[16, 16, 16, 12]}
            position={['absolute', 'absolute', 'absolute', 'static']}
            flexDir={['column', 'column', 'column', 'row']}
            width={['100%', '100%', '100%', 'fit-content']}
            left={left}
            transition={'left 200ms linear'}
            top={0}
            h={['100vh', '100vh', '100vh', 'fit-content']}
            justifyContent={'center'}
            color={'brand.light'}
            zIndex={100}
        >
            <Image 
                src={close}
                w={10}
                position={'absolute'}
                top={4}
                right={4}
                onClick={toggleSidebar}
                display={['block', 'block', 'block', 'none']}
                cursor={'pointer'}
            />
            <Link 
                cursor={'pointer'}
                _hover={{
                    textDecor: 'none',
                    color: 'brand.main'
                }}
                href={'#home'}
            >
                <Text
                    onClick={toggleSidebar}
                >
                    Home
                </Text>
            </Link>
            <Link
                cursor={'pointer'}
                _hover={{
                    textDecor: 'none',
                    color: 'brand.main'
                }}
                href={'#about'}
            >
                <Text
                    onClick={toggleSidebar}
                >
                    About
                </Text>
            </Link>
            <Link 
                cursor={'pointer'}
                _hover={{
                    textDecor: 'none',
                    color: 'brand.main'
                }}
                href={'#services'}
            >
                <Text
                    onClick={toggleSidebar}
                >
                    Services
                </Text>
            </Link>
            <Link 
                cursor={'pointer'}
                _hover={{
                    textDecor: 'none',
                    color: 'brand.main'
                }}
                href={'#team'}
            >
                <Text
                    onClick={toggleSidebar}
                >
                    Team
                </Text>
            </Link>
            <Link 
                cursor={'pointer'}
                _hover={{
                    textDecor: 'none',
                    color: 'brand.main'
                }}
                href={'#FAQs'}
            >
                <Text
                    onClick={toggleSidebar}
                >
                    FAQs
                </Text>
            </Link>
        </HStack>
        <Image 
            src={menu}
            w={10}
            display={['block', 'block', 'block', 'none']}
            onClick={toggleSidebar}
            cursor={'pointer'}
        />
    </HStack>
  )
}

export default Sidebar