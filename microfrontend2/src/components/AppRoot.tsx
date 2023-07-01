// This is the microfrontend entry point.

import { FunctionComponent } from "react";
import { BrowserRouter, Link as ReactRouterLink, Route, Routes } from 'react-router-dom'
import { Box, Link, Text } from '@chakra-ui/react'
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { NotFound } from "./NotFound";

const AppRoot: FunctionComponent = () => {
  return (
    <Box>
      {/* <BrowserRouter> */}
      {/* The BrowserRouter component should be in Playground.tsx as it should use the parent's one when rendered in the parent. */}

        <Text>MICROFRONTEND TWO (REMOTE)</Text>
        <Box>
          <Link as={ReactRouterLink} to="one" mr={10}>Page one</Link>
          <Link as={ReactRouterLink} to="two" mr={10}>Page two</Link>
        </Box>
      
        <Routes>
          <Route index element={<Page1 />} />
          <Route path="one" element={<Page1 />} />
          <Route path="two" element={<Page2 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      {/* </BrowserRouter> */}
    </Box>
  );
}

export default AppRoot;