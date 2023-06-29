// This is the microfrontend entry point.

import { FunctionComponent } from "react";
import { Outlet, Link as ReactRouterLink } from 'react-router-dom'
import { Box, Link } from '@chakra-ui/react'

export const Layout: FunctionComponent = () => {
  return (
    <div>
      
      <h1>MICROFRONTEND TWO (REMOTE)</h1>

      <Box>
        <Link as={ReactRouterLink} to="one" mr={10}>Page one</Link>
        <Link as={ReactRouterLink} to="two" mr={10}>Page two</Link>
      </Box>

      <Outlet />

    </div>
  );
}
