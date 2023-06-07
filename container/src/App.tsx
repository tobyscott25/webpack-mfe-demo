import { lazy, Suspense, useState } from "react";
import { Box, Text } from '@chakra-ui/react';
import "./styles.css";

const MicrofrontendOne = lazy(() => import("microfrontend1/app"));

const App = () => {
  const [text, setText] = useState(null);

  return (
    <Box textAlign={'center'} className="App">
      <Text fontSize={'2xl'} my={5}>CONTAINER (HOST)</Text>
      { text && <Text>Your text is: {text}</Text> }
      <Box border={'1px solid black'} shadow={'lg'} rounded={'lg'} mx={'300px'} my={5}>
        <Suspense fallback={<Text>Loading...</Text>}>
          <MicrofrontendOne onChange={(event) => setText(event.target.value)} />
        </Suspense>
      </Box>
    </Box>
  );
};

export default App;
