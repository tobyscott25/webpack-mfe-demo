import { FunctionComponent, ReactElement } from 'react'
import {
	Text,
	Button,
	Box,
	Code,
	Tooltip,
	Link,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
} from '@chakra-ui/react'

export const Home: FunctionComponent = (): ReactElement => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<Box>
			<Text my={10}>
				Edit <Code>src/pages/Home.tsx</Code> and save to reload.{' '}
				<Link
					color="teal.500"
					href="https://chakra-ui.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn Chakra
				</Link>
			</Text>

			<Tooltip label="This will open a modal" placement="top">
				<Button onClick={onOpen}>Click this button</Button>
			</Tooltip>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Example Modal</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text>
							Here&apos;s a Chakra UI modal. You can close it by
							clicking &quot;Close&quot;
						</Text>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
						<Button variant="ghost">Secondary Action</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	)
}