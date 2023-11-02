import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from '@chakra-ui/react'

import { AppRoot } from "./components/AppRoot";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <ChakraProvider>
      <AppRoot />
    </ChakraProvider>
  </StrictMode>
);
