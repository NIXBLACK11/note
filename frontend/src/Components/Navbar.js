import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  useColorMode
} from '@chakra-ui/react';

import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="header" py={2} px={4} position="sticky" top="0" zIndex="999" >
      <Flex alignItems="center">
        <Menu>
            <MenuButton as={Button} variant="outline">
                Dropdown
            </MenuButton>
            <MenuList>
                <MenuItem>Option 1</MenuItem>
                <MenuItem>Option 2</MenuItem>
                <MenuItem>Option 3</MenuItem>
            </MenuList>
        </Menu>
        <Spacer />
        <Link  display={['none', 'none', 'block']} ml={[10, 30]} href="#">
            Link 1
        </Link>
        <Link  display={['none', 'none', 'block']} ml={[10, 30]} href="#">
            Link 2
        </Link>
        <Button onClick={toggleColorMode} ml={30}>
            {colorMode === 'light' ? <FaMoon /> : <FaSun />}
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
