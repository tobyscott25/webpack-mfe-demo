import { FunctionComponent, ReactElement } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useUserStore } from '../stores/userStore'

export const ProtectedRoute: FunctionComponent = (): ReactElement => {
	const userStore = useUserStore()
	return userStore.id ? <Outlet /> : <Navigate to="/login" />
}
