// This is the microfrontend entry point.

import { FunctionComponent } from "react";
import { RouterProvider } from 'react-router-dom'
import { Spinner } from "@chakra-ui/react";

import router from "../router";

export const AppRoot: FunctionComponent = () => {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<Spinner />}
    />
  );
}
