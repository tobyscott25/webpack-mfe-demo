// This is the microfrontend entry point.

import * as React from 'react';
// import { Input } from '@chakra-ui/react';

export default function App({ onChange }) {
  return (
    <div>
      <h1>MICROFRONTEND ONE (REMOTE)</h1>
      {/* <Input onChange={onChange} type="text" placeholder="Enter your name" /> */}
      {/* Using Chakra UI in the microfrontend is causing "Invalid hook call" and "Cannot read properties of null (reading 'useContext')" errors. */}
      <input onChange={onChange} type="text" placeholder="Enter your name" />
    </div>
  );
}
