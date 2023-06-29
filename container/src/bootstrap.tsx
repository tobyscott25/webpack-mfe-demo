import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { ChakraProvider, Spinner } from '@chakra-ui/react'

import router from "./router";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider
        router={router}
        fallbackElement={<Spinner />}
      />
    </ChakraProvider>
  </StrictMode>
);
