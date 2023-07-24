// This is the microfrontend entry point. Must export the component as default.

import { FunctionComponent } from "react";
import { Box, Text } from "@chakra-ui/react";
import ToDoList from "./ToDoList";

const App: FunctionComponent = () => {
  return (
    <Box p={5}>
      <Text fontSize={'lg'}>To-Do List</Text>
      <ToDoList />
    </Box>
  );
}

export default App;