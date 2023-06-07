import { lazy, Suspense, useState } from "react";
import { Box, Text } from '@chakra-ui/react';
import "./styles.css";

const MicrofrontendOne = lazy(() => import("MICROFRONTEND_ONE/app"));

const App = () => {
  const [name, setName] = useState(null);

  return (
    <Box textAlign={'center'} className="App">
      <Text fontSize={'2xl'} my={5}>CONTAINER (HOST)</Text>
      { name && <Text>Your name is: {name}</Text> }
      <Box border={'1px solid black'} shadow={'lg'} rounded={'lg'} mx={'300px'} my={5}>
        <Suspense fallback={<Text>Loading...</Text>}>
          <MicrofrontendOne onChange={(e: any) => setName(e.target.value)} />
        </Suspense>
      </Box>
    </Box>
  );
};

export default App;
