import { createBrowserRouter } from 'react-router-dom'
import { Home } from '@pages/home'
import { SignIn } from '@pages/sign-in'
import { SignUp } from '@pages/sign-up'

/* v6 https://reactrouter.com/en/main/upgrading/v6-data */

export const router = createBrowserRouter([
	{ path: '/', Component: Home },
	{ path: '/sign-in', Component: SignIn },
	{ path: '/sign-up', Component: SignUp },
	/* ... all other routes */
])
