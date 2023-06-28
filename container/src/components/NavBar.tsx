import { FunctionComponent, ReactElement } from 'react'
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom'
import { Box, Flex, Link, Text } from '@chakra-ui/react'
// We need to use Chakra UI's <Link> component for consistency with the rest of the UI.
// But we need to use React Router's <Link> component for the routing to work properly.
// So we import Chakra UI's <Link> component, and then import React Router's <Link> component as ReactRouterLink.
// We can then pass the "as" prop to Chakra UI's <Link> component. See: https://chakra-ui.com/docs/components/link/usage#usage-with-routing-library

import { useUserStore } from '../stores/userStore'

export const NavBar: FunctionComponent = (): ReactElement => {
    const navigate = useNavigate()
	const userStore = useUserStore()
	return (
		<Flex
			alignItems={'center'}
			justifyContent={'space-between'}
			borderBottom={1}
			borderStyle={'solid'}
			borderColor={'gray.100'}
			shadow={'sm'}
			px={10}
			py={1}
			fontSize={'sm'}
		>
			<Box>
				<Link as={ReactRouterLink} to="/" mr={10}>
					Home
				</Link>
                <Link as={ReactRouterLink} to="/child-app" mr={10}>
					Child module
				</Link>
				<Link as={ReactRouterLink} to="/abc123" mr={10}>
					404 Example
				</Link>
			</Box>

			<Text
                onClick={() => {
                    userStore.clearSession()
                    navigate('/')
                }}
            >
                Log out
            </Text>
		</Flex>
	)
}