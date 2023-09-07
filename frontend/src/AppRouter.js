import React from 'react';
import { Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import Routes
import { ChakraProvider, CSSReset, ColorModeScript, extendTheme } from '@chakra-ui/react';
import Board from './Board';
import Login from './Login';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
  },
});

const AppRouter = () => {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <CSSReset />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/board" element={<Board />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default AppRouter;
