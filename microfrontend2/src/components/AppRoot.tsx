// This is the microfrontend entry point.

import { FunctionComponent } from "react";
import { RouterProvider } from 'react-router-dom'

import router from "../router";

export const AppRoot: FunctionComponent = () => {
  return <RouterProvider router={router} />;
}
