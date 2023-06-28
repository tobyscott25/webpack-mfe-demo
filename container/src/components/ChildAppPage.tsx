import { lazy, Suspense, useState, FunctionComponent } from "react";
import { Box, Text } from '@chakra-ui/react';
import "../assets/styles.css";

const MicrofrontendOne = lazy(() => import("microfrontend1/app"));

export const ChildAppPage: FunctionComponent = (): JSX.Element => {
  const [text, setText] = useState<string>('');

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
