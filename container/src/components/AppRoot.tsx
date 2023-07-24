import { FunctionComponent, ReactElement, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LocalStorageSessionKeys, useUserStore } from '../stores/userStore'

import { Flex, Spinner, Text } from '@chakra-ui/react'
import { NavBar } from './NavBar'
import { ProtectedRoute } from './ProtectedRoute'
import { NotFound } from './NotFound'
import { Login } from './Login'
import { Home } from './Home'
import { MicroFrontendOnePage } from './MicroFrontendOnePage'
import { MicroFrontendTwoPage } from './MicroFrontendTwoPage'
import { MicroFrontendThreePage } from './MicroFrontendThreePage'

export const AppRoot: FunctionComponent = (): ReactElement => {
	const userStore = useUserStore()
	const [appInitialised, setAppInitialised] = useState<boolean>(false)

	function initaliseApp(): void {
		if (userStore.id && userStore.token) {
			setAppInitialised(true)
			return
		}

		if (
			!localStorage.getItem(LocalStorageSessionKeys.userId) ||
			!localStorage.getItem(LocalStorageSessionKeys.userToken)
		) {
			setAppInitialised(true)
			return
		}

		userStore.setSession(
			localStorage.getItem(
				LocalStorageSessionKeys.userId
			) as unknown as number,
			localStorage.getItem(LocalStorageSessionKeys.userToken) as string
		)
		setAppInitialised(true)
	}

	useEffect(() => {
		initaliseApp()
	}, [])

	return (
		<BrowserRouter>
			{appInitialised ? (
				<Flex flexDir={'column'} minHeight={'100vh'} bg={'gray.300'}>
					{(userStore.id ? true : false) && <NavBar />}

					<Flex flexDir={'column'} flexGrow={1} p={8}>
						<Routes>
							<Route element={<ProtectedRoute />}>
								<Route index element={<Home />} />
								<Route path="microfrontend1/*" element={<MicroFrontendOnePage />} />
								<Route path="microfrontend2/*" element={<MicroFrontendTwoPage />} />
								<Route path="microfrontend3/*" element={<MicroFrontendThreePage />} />
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
		</BrowserRouter>
	)
}