// This is the microfrontend entry point. Must export the component as default.

import { FunctionComponent } from "react";
import { Link as ReactRouterLink, Route, Routes } from 'react-router-dom'
import { Box, Link } from '@chakra-ui/react'
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { NotFound } from "./NotFound";

const AppRoot: FunctionComponent = () => {
  return (
    <Box>
        <Box bg={'gray.200'}>
          <Link as={ReactRouterLink} to="one" mr={10}>Page one</Link>
          <Link as={ReactRouterLink} to="two" mr={10}>Page two</Link>
          <Link as={ReactRouterLink} to="xyz789" mr={10}>Not Found example</Link>
        </Box>

        <Box p={5}>
          <Routes>
            <Route index element={<Page1 />} />
            <Route path="one" element={<Page1 />} />
            <Route path="two" element={<Page2 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>

    </Box>
  );
}

export default AppRoot;
