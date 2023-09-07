import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './Components/Navbar';

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
        <Textarea
          placeholder="Start typing..."
          size="lg"
          resize="none"
          py={[5, 7, 10]}
          px={[10, 70, 160]}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            outline: 'none',
            fontSize: '16px',
            lineHeight: '1.5',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            color: 'inherit',
          }}
        />
      </Box>
    </Box>
  );
};

export default Board;
