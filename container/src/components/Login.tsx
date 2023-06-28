import { FunctionComponent, ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
// import { Logo } from '../components/Logo'
// import { LoginForm } from './LoginForm'

import { useUserStore } from '../stores/userStore'

export const Login: FunctionComponent = (): ReactElement => {
    const navigate = useNavigate()
	const userStore = useUserStore()
	return (
		<Flex
			flexDir={'column'}
			justifyContent={'space-around'}
			// border={'1px solid red'}
			flexGrow={1}
		>
			<Box maxWidth={'600px'} minWidth={'350px'} mx={'auto'}>
				{/* <LoginForm /> */}
                <Button
                    onClick={() => {
                        userStore.setSession(7, "abc123")
                        navigate('/')
                    }}
                >Click to perform a fake login!</Button>
			</Box>
		</Flex>
	)
}