import { Box, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";

export const NotFound: FunctionComponent = () => {
  return (
    <Box>
      <Text fontSize={'xl'}>Oopsie daisy, nothing is here!</Text>
      <Text mt={3}>This is the Microfrontend 2's specific 404 page.</Text>
    </Box>
  );
}
