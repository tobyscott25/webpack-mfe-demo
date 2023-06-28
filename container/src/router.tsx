import { createBrowserRouter } from 'react-router-dom'
import { Router } from '@remix-run/router'

import { AppRoot } from './components/AppRoot'
import { ProtectedRoute } from './components/ProtectedRoute'
import { RouterError } from './components/RouterError'

import { Login } from './components/Login'
import { Home } from './components/Home'
import { ChildAppPage } from './components/ChildAppPage'
import { NotFound } from './components/NotFound'

const router: Router = createBrowserRouter([
	{
		path: '/',
		element: <AppRoot />,
		errorElement: <RouterError />,
		children: [
			{
				element: <ProtectedRoute />,
				children: [
					{
						index: true,
						element: <Home />,
					},
                    {
						path: '/child-app',
						element: <ChildAppPage />,
					},
					{
						path: '*',
						element: <NotFound />,
					},
				],
			},
			{
				path: 'login',
				element: <Login />,
			},
		],
	},
])

export default router