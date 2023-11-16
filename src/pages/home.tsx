import { Header } from '@components/commons/header'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	const getTodo = async () => {
		return axios
			.get('https://jsonplaceholder.typicode.com/todos/1')
			.then((res) => res.data)
	}

	const { data, isFetched } = useQuery({
		queryKey: ['getTodo'],
		queryFn: getTodo,
	})

	return (
		<div className="">
			<Header />
			{isFetched && <pre>{JSON.stringify(data, null, 2)}</pre>}
		</div>
	)
}
