// This is only used for independent development of the microfrontend.

import { FunctionComponent } from 'react';
import AppRoot from './AppRoot';
import { Box, Text, Code } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

const PlaygroundContainer: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Box textAlign={'center'} bg={'gray.300'} minH={'100vh'}>

        <Box my={5} p={4} shadow={'lg'} display={'inline-block'} bg={'gray.200'} rounded={'lg'}>
          <Text>This is the isolated development playground for <Code>microfrontend2</Code> acting as the host app.</Text>
          <Text>The JS bundle is available for consumption at <Code>/remoteEntry.js</Code></Text>
        </Box>
      
        <Box bg={'white'} shadow={'lg'} rounded={'lg'} mx={'300px'} my={5}>
          <AppRoot />
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default PlaygroundContainer;
