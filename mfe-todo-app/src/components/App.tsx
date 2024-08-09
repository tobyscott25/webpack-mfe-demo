// This is the microfrontend entry point. Must export the component as default.

import { FunctionComponent } from "react";
import { Box, ChakraProvider, Text } from "@chakra-ui/react";
import ToDoList from "./ToDoList";

const App: FunctionComponent = () => {
  return (
    <ChakraProvider>
      <Box p={5}>
        <Text fontSize={"lg"}>To-Do List</Text>
        <ToDoList />
      </Box>
    </ChakraProvider>
  );
};

export default App;
