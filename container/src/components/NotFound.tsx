import { FunctionComponent, ReactElement } from 'react'
import { Text } from '@chakra-ui/react'

export const NotFound: FunctionComponent = (): ReactElement => {
	return (
		<>
			<Text fontSize={'2xl'}>404</Text>
			<Text>Page not found.</Text>
		</>
	)
}
