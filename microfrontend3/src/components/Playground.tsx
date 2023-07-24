// This is only used for independent development of the microfrontend.

import { FunctionComponent, useState } from 'react';
import App from './App';
import { Box, Text, Code } from '@chakra-ui/react';

const PlaygroundContainer: FunctionComponent = () => {
  const [text, setText] = useState(null);
  return (
    <Box textAlign={'center'} bg={'gray.300'} minH={'100vh'}>

      <Box my={5} p={4} shadow={'lg'} display={'inline-block'} bg={'gray.200'} rounded={'lg'}>
        <Text>This is the isolated development playground for <Code>microfrontend3</Code> acting as the host app.</Text>
        <Text>The JS bundle is available for consumption at <Code>/remoteEntry.js</Code></Text>
      </Box>
      
      <Text>Evidence of shared state: Your text is: {text}</Text>
     
      <Box bg={'white'} shadow={'lg'} rounded={'lg'} mx={'300px'} my={5}>
        <App onChange={(event) => setText(event.target.value)} />
      </Box>
    </Box>
  );
}

export default PlaygroundContainer;
