// This is only used for independent development of the microfrontend.

import { FunctionComponent, useState } from 'react';
import App from './App';
import { Box, Text, Code } from '@chakra-ui/react';

const PlaygroundContainer: FunctionComponent = () => {
  const [name, setName] = useState(null);
  return (
    <Box textAlign={'center'}>
      <Text fontSize={'2xl'} my={5}>PLAYGROUND CONTAINER (DUMMY HOST)</Text>
      <Text>The JS bundle is being served from this host at <Code>/remoteEntry.js</Code></Text>
      { name && <Text>Your name is: {name}</Text> }
     
      <Box border={'1px solid black'} shadow={'lg'} rounded={'lg'} mx={'300px'} my={5}>
        <App onChange={(event) => setName(event.target.value)} />
      </Box>
    </Box>
  );
}

export default PlaygroundContainer;
