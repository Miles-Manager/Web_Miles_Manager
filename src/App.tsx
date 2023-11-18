import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { UserProvider } from '@contexts/user/provider'
import { router } from '@/routes'

const queryClient = new QueryClient()

export const App: React.FC = () => {
	return (
		<UserProvider>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</UserProvider>
	)
}
