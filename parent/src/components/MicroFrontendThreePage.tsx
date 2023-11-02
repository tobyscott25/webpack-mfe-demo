import { lazy, Suspense, useState, FunctionComponent } from "react";
import { Box, Text } from '@chakra-ui/react';
import "../assets/styles.css";

const MicroFrontendThreeLazy = lazy(() => import("microfrontend3/app"));

export const MicroFrontendThreePage: FunctionComponent = (): JSX.Element => {
  const [text, setText] = useState<string>('');

  return (
    <Box textAlign={'center'}>
      <Text>Evidence of shared state: Your text is: {text}</Text>
      <Box bg={'white'} shadow={'lg'} rounded={'lg'} mx={'300px'} my={5}>
        <Suspense fallback={<Text>Loading...</Text>}>
          <MicroFrontendThreeLazy onChange={(event) => setText(event.target.value)} />
        </Suspense>
      </Box>
    </Box>
  );
};
