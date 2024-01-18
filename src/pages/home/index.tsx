// import { Header } from '@/components/header'
import { Sidebar } from '@components/sidebar'
import { api } from '@config/axios'
import { useQuery } from '@tanstack/react-query'

export const Home: React.FC = () => {
	const { data, error } = useQuery({
		queryKey: ['teste'],
		queryFn: async () => {
			const { data } = await api.get('/user')
			return data
		},
	})

	console.log(data, error)

	return (
		<div className="flex h-full flex-col">
			{/* <Header /> */}
			<Sidebar />
		</div>
	)
}
