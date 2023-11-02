import { FunctionComponent, ReactElement } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import { LoginForm } from "./LoginForm";

export const Login: FunctionComponent = (): ReactElement => {
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"space-around"}
      // border={'1px solid red'}
      flexGrow={1}
    >
      <Box maxWidth={"600px"} minWidth={"350px"} mx={"auto"}>
        <Text fontSize={"xl"}>Welcome!</Text>
        <LoginForm />
      </Box>
    </Flex>
  );
};
