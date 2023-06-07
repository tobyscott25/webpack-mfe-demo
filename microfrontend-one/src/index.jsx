// This is only used for independent development of the microfrontend.

import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PlaygroundContainer from './components/Playground';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <PlaygroundContainer />
  </StrictMode>
);
