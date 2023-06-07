// This is the microfrontend entry point.

import { FunctionComponent } from "react";
// import { Input } from '@chakra-ui/react';

interface AppProps {
  onChange: (e: any) => void;
}

const App: FunctionComponent<AppProps> = ({ onChange }) => {
  return (
    <div>
      <h1>MICROFRONTEND ONE (REMOTE)</h1>
      {/* <Input onChange={onChange} type="text" placeholder="Enter your name" /> */}
      {/* Using Chakra UI in the microfrontend is causing "Invalid hook call" and "Cannot read properties of null (reading 'useContext')" errors. */}
      <input onChange={onChange} type="text" placeholder="Enter your name" />
    </div>
  );
}

export default App;