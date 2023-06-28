import { lazy, Suspense, useState, FunctionComponent } from "react";
import { Box, Text } from '@chakra-ui/react';
import "../assets/styles.css";

const MicrofrontendTwo = lazy(() => import("microfrontend2/app"));

export const MicroFrontendTwoPage: FunctionComponent = (): JSX.Element => {
  const [text, setText] = useState<string>('');

  return (
    <Box textAlign={'center'}>
      { text && <Text>Evidence of shared state: Your text is: {text}</Text> }
      <Box border={'1px solid black'} shadow={'lg'} rounded={'lg'} mx={'300px'} my={5} className="App">
        <Suspense fallback={<Text>Loading...</Text>}>
          <MicrofrontendTwo onChange={(event) => setText(event.target.value)} />
        </Suspense>
      </Box>
    </Box>
  );
};
