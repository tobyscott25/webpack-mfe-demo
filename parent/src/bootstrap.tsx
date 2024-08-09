import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import { AppRoot } from "./AppRoot";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <AppRoot />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
