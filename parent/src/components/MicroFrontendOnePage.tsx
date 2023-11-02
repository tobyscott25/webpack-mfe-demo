import { lazy, Suspense, useState, FunctionComponent } from "react";
import { Box, Text } from '@chakra-ui/react';
import "../assets/styles.css";

const MicroFrontendOneLazy = lazy(() => import("microfrontend1/app"));

export const MicroFrontendOnePage: FunctionComponent = (): JSX.Element => {

  return (
    <Box textAlign={'center'}>
      <Box bg={'white'} shadow={'lg'} rounded={'lg'} mx={'300px'} my={5}>
        <Suspense fallback={<Text>Loading...</Text>}>
          <MicroFrontendOneLazy />
        </Suspense>
      </Box>
    </Box>
  );
};
