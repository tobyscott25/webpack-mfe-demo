// This is the microfrontend entry point.

import { FunctionComponent } from "react";
import { Input } from '@chakra-ui/react';

interface AppProps {
  onChange: (e: any) => void;
}

const App: FunctionComponent<AppProps> = ({ onChange }) => {
  return (
    <div>
      <h1>MICROFRONTEND TWO (REMOTE)</h1>
      <Input onChange={onChange} type="text" placeholder="Enter some text here..." />
    </div>
  );
}

export default App;