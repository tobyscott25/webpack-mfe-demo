import { FunctionComponent, ReactElement, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { LocalStorageSessionKeys, useUserStore } from '../stores/userStore'

import { Flex } from '@chakra-ui/react'
import { NavBar } from './NavBar'

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
		<>
			{appInitialised ? (
				<Flex flexDir={'column'} minHeight={'100vh'}>
					{(userStore.id ? true : false) && <NavBar />}

					<Flex
						flexDir={'column'}
						p={8}
						// border={'1px solid green'}
						flexGrow={1}
					>
						{/* An <Outlet> renders the component for the child route that is currently active. */}
						<Outlet />
					</Flex>

				</Flex>
			) : (
				<Flex>Loading...</Flex>
			)}
		</>
	)
}