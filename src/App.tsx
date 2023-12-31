import { UserProvider } from '@/contexts/User/user-provider'
import { router } from '@/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const queryClient = new QueryClient()

export const App: React.FC = () => {
	return (
		<>
			<UserProvider>
				<QueryClientProvider client={queryClient}>
					<RouterProvider router={router} />
				</QueryClientProvider>
			</UserProvider>
			<ToastContainer />
		</>
	)
}
