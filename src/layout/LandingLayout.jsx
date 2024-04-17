import { VStack } from '@chakra-ui/react'
import background from '../assets/images/bg-img.svg'

const LandingLayout = ({ children }) => {
  return (
    <VStack
      w={'100%'}
      minH={'100vh'}
      backgroundColor={'#060514'}
      backgroundImage={background}
      paddingX={[5, 7.5, 10, 20]}
    >
        {children}
    </VStack>
  )
}

export default LandingLayout