// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import AppRouter from './AppRouter'; // Import the AppRouter component

ReactDOM.render(
  <ChakraProvider>
    <AppRouter />
  </ChakraProvider>,
  document.getElementById('root')
);
