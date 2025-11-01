import { HStack, Box, Spacer, Button, Icon } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@chakra-ui/react';
import { WiDaySunny } from 'react-icons/wi';
interface NavBarProps {
  colorMode: 'light' | 'dark';
  setColorMode: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}
const NavBar: React.FC<NavBarProps> = ({ colorMode, setColorMode }) => {
  return (
    <>
      <HStack p={4} borderBottom="1px solid" borderColor="gray.200">
        <Box fontWeight="bold" fontSize="xl">
          RecipeFinder
        </Box>

        <Spacer />

        <Button asChild variant="ghost">
          <Link to="/">Home</Link>
        </Button>

        <Button asChild variant="ghost">
          <Link to="/recipes">Recipes</Link>
        </Button>

        <Button asChild variant="ghost">
          <Link to="/about">About</Link>
        </Button>
        <IconButton
          onClick={() => {
            setColorMode(colorMode === 'light' ? 'dark' : 'light');
          }}>
          <Icon as={WiDaySunny} />
        </IconButton>
      </HStack>
    </>
  );
};
export default React.memo(NavBar);
