import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      main: '#4EF5E7',
      card: '#4EF5E717',
      light: '#FFFFFF',
      border: '#4EF5E775',
      bg: '#060514'
    },
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </ChakraProvider>
)
