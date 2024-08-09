import { FunctionComponent, ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

import { useSessionStore } from "../../stores/sessionStore";

export const LoginForm: FunctionComponent = (): ReactElement => {
  const navigate = useNavigate();
  const sessionStore = useSessionStore();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Box maxWidth={"600px"} minWidth={"350px"}>
      <Input value={username} placeholder={"Username"} />
      <Input value={password} placeholder={"Password"} />
      <Button
        onClick={() => {
          sessionStore.setToken("super-secret-token");
          navigate("/");
        }}
      >
        Login
      </Button>
    </Box>
  );
};
