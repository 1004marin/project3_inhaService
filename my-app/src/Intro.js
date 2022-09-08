import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
//import { ColorModeSwitcher } from './ColorModeSwitcher';
//import { Logo } from './Logo';
//import { extendTheme } from '@chakra-ui/react'




function Intro()  {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="tomato" w="100%" p={4} color="white">
       This is the Box
    </Box>
    </ChakraProvider>
  );
};

export default Intro;
