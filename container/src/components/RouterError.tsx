import { FunctionComponent, ReactElement } from 'react'
import { useRouteError } from 'react-router-dom'
import { Box, Text, Code } from '@chakra-ui/react'

// If there is no catch-all route, this will be rendered and it will show a 404 error. However in that case, it's not being rendered
// in the <Outlet> of the Root component. So it will fill the whole screen and create an unfriendly user experience.
// For this reason, we have a catch-all route in src\index.tsx with a <NotFound> component that will be rendered in the <Outlet> of the Root component.

export const RouterError: FunctionComponent = (): ReactElement => {
	const error = useRouteError() as { statusText?: string; message?: string }
	console.log(error)
	return (
		<Box>
			<Text fontSize={'2xl'}>Router Error</Text>
			<Code>{error.statusText || error.message}</Code>
		</Box>
	)
}