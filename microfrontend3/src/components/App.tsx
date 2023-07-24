// This is the microfrontend entry point. Must export the component as default.

import { FunctionComponent } from "react";
import { Box, Input } from '@chakra-ui/react';

interface AppProps {
  onChange: (e: any) => void;
}

const App: FunctionComponent<AppProps> = ({ onChange }) => {
  return (
    <Box p={5}>
      <Input onChange={onChange} type="text" placeholder="Enter some text here..." />
    </Box>
  );
}

export default App;