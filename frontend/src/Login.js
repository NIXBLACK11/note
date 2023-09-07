import React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';

const Login = () => {
  return (
    <Box textAlign="center" p={10}>
      <Heading>Welcome to the Login Page</Heading>
      <Button colorScheme="blue" mt={4}>
        Click me
      </Button>
    </Box>
  );
};

export default Login;
