import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  LocalStorageSessionKeys,
  useSessionStore,
} from "../stores/sessionStore";

import { Flex, Spinner, Text } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { ProtectedRoute } from "./ProtectedRoute";
import { NotFound } from "./NotFound";

import { Home } from "./Home";
import { ToDoAppPage } from "./ToDoAppPage";
import { MicroFrontendTwoPage } from "./MicroFrontendTwoPage";
import { Login } from "./Login";

export const AppRoot: FunctionComponent = (): ReactElement => {
  const sessionStore = useSessionStore();
  const [appInitialised, setAppInitialised] = useState<boolean>(false);

  function initaliseApp(): void {
    if (sessionStore.token) {
      setAppInitialised(true);
      return;
    }

    if (!localStorage.getItem(LocalStorageSessionKeys.userSessionToken)) {
      setAppInitialised(true);
      return;
    }

    sessionStore.setToken(
      localStorage.getItem(LocalStorageSessionKeys.userSessionToken) as string
    );
    setAppInitialised(true);
  }

  useEffect(() => {
    initaliseApp();
  }, []);

  return (
    <>
      {appInitialised ? (
        <Flex minHeight={"100vh"} bg={"gray.200"}>
          {(sessionStore.token ? true : false) && <NavBar />}

          <Flex flexDir={"column"} flexGrow={1}>
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route index element={<Home />} />
                <Route path="to-do-app/*" element={<ToDoAppPage />} />
                <Route
                  path="subrouting-example/*"
                  element={<MicroFrontendTwoPage />}
                />
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Flex>
        </Flex>
      ) : (
        <Flex>
          <Spinner />
          <Text>Loading...</Text>
        </Flex>
      )}
    </>
  );
};
