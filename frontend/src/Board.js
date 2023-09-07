import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';

const Board = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
        <Navbar />
        <Box
            flex="1"
            mx={4}
            p={4}
        >
            <TextArea/>
        </Box>
    </Box>
  );
};

export default Board;
