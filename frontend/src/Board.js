import React from 'react';
import { Box, Heading, Button, useColorMode, Textarea, SimpleGrid } from '@chakra-ui/react';

const Board = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  
    return (
      <Box textAlign="center" p={10}>
        <Heading>Main Page</Heading>
        <p>This is the about page content.</p>
        <Button onClick={toggleColorMode} colorScheme="blue">
          Toggle Color Mode
        </Button>
        <Textarea
            placeholder="Start typing..."
            size="lg"
            resize="none"
            style={{width: '100%', height: '100%'}}
        />
      </Box>
    );
  };

export default Board;
