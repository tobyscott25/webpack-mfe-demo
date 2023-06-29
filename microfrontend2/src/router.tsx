import { Navigate, createBrowserRouter } from 'react-router-dom'
import { Router } from '@remix-run/router'

import { Layout } from './components/Layout'
import { RouterError } from './components/RouterError'

import { Page1 } from './components/Page1'
import { Page2 } from './components/Page2'
import { NotFound } from './components/NotFound'


const router: Router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <RouterError />,
		children: [
			{
				index: true,
				element: <Navigate to={'/one'} />,
			},
			{
				path: '/one',
				element: <Page1 />,
			},
			{
				path: '/two',
				element: <Page2 />,
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
])

export default router