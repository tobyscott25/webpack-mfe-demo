// This is only used for independent development of the microfrontend.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from '@chakra-ui/react'
import PlaygroundContainer from './components/Playground';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <ChakraProvider>
      <PlaygroundContainer />
    </ChakraProvider>
  </StrictMode>
);
