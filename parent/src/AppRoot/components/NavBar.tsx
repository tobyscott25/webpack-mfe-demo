import { FunctionComponent, ReactElement } from "react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
// We need to use Chakra UI's <Link> component for consistency with the rest of the UI.
// But we need to use React Router's <Link> component for the routing to work properly.
// So we import Chakra UI's <Link> component, and then import React Router's <Link> component as ReactRouterLink.
// We can then pass the "as" prop to Chakra UI's <Link> component. See: https://chakra-ui.com/docs/components/link/usage#usage-with-routing-library

import { useSessionStore } from "../../stores/sessionStore";

export const NavBar: FunctionComponent = (): ReactElement => {
  const navigate = useNavigate();
  const sessionStore = useSessionStore();

  const links = [
    { name: "Home", path: "/" },
    { name: "To-do app", path: "/to-do-app" },
    { name: "Shared router example", path: "/subrouting-example" },
  ];

  return (
    <Flex
      direction={"column"}
      justifyContent={"space-between"}
      bg={"green.600"}
      p={3}
      fontSize={"sm"}
      width={"300px"}
      fontWeight={"medium"}
      color={"white"}
    >
      <Box>
        <Text fontSize={"xl"} my={5} textAlign={"center"}>
          ✨ MF Demo ✨
        </Text>
        {links.map((link) => (
          <Box
            key={link.path}
            as={ReactRouterLink}
            to={link.path}
            display={"block"}
            rounded={"md"}
            px={4}
            py={2}
            my={2}
            _hover={{ textDecoration: "none", background: "blackAlpha.200" }}
          >
            {link.name}
          </Box>
        ))}
      </Box>

      <Text
        onClick={() => {
          sessionStore.clearToken();
          navigate("/");
        }}
        cursor={"pointer"}
        display={"block"}
        rounded={"md"}
        px={4}
        py={2}
        my={2}
        _hover={{ textDecoration: "none", background: "blackAlpha.200" }}
      >
        Log out
      </Text>
    </Flex>
  );
};
