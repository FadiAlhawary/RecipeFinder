import { HStack, Box, Spacer, Button, Icon } from '@chakra-ui/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconButton } from '@chakra-ui/react';
import { WiDaySunny, WiNightClear } from 'react-icons/wi';
interface NavBarProps {
  colorMode: 'light' | 'dark';
  setColorMode: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}
const NavBar: React.FC<NavBarProps> = ({ colorMode, setColorMode }) => {
  const location = useLocation();
  return (
    <>
      <HStack p={4} borderBottom="1px solid" borderColor="gray.200">
        <Box fontWeight="bold" fontSize="xl">
          RecipeFinder
        </Box>

        <Spacer />

        <Button
          asChild
          variant="ghost"
          disabled={location.pathname === '/'}
          backgroundColor={
            location.pathname === '/' ? 'ActiveCaption' : 'transparent'
          }>
          <Link to="/">Home</Link>
        </Button>

        <Button
          asChild
          variant="ghost"
          disabled={location.pathname === '/cart'}
          backgroundColor={
            location.pathname === '/cart' ? 'ActiveCaption' : 'transparent'
          }>
          <Link to="/cart">Shopping Cart</Link>
        </Button>

        <Button
          asChild
          variant="ghost"
          disabled={location.pathname === '/about'}
          backgroundColor={
            location.pathname === '/about' ? 'ActiveCaption' : 'transparent'
          }>
          <Link to="/about">About</Link>
        </Button>
        <IconButton
          onClick={() => {
            setColorMode(colorMode === 'light' ? 'dark' : 'light');
          }}>
          {colorMode === 'light' ? (
            <Icon as={WiNightClear} boxSize={6} />
          ) : (
            <Icon as={WiDaySunny} boxSize={6} />
          )}
        </IconButton>
      </HStack>
    </>
  );
};
export default React.memo(NavBar);
