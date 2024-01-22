// import { Header } from '@/components/header'
import Smiles from '@/assets/home/smiles.png'
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

	const plans = [
		{
			name: 'Programa 1',
			url: Smiles,
			amount: 1000,
		},
		{
			name: 'Programa 2',
			url: Smiles,
			amount: 2000,
		},
		{
			name: 'Programa 3',
			url: Smiles,
			amount: 3000,
		},
	]

	const totalAmount = plans.reduce((acc, current) => acc + current.amount, 0)

	return (
		<div className="flex h-full w-full">
			{/* <Header /> */}
			<Sidebar />
			<div className="flex grow flex-col items-center justify-center">
				<table className="w-[600px] p-10">
					<thead>
						<tr className="bg-black text-project-blue-100">
							<th className="rounded-tl-2xl p-4 text-start">Programa</th>
							<th className="text-start">Montante</th>
							<th className="rounded-tr-2xl text-start">Concentração</th>
						</tr>
					</thead>
					<tbody>
						{plans.map((plan, index) => (
							<tr
								key={plan.name}
								className={`${index % 2 === 0 && 'bg-slate-100'} p-4`}
							>
								<td className="flex items-center gap-2 p-4">
									<img className="h-12 w-12" src={plan.url} alt="" />
									{plan.name}
								</td>
								<td className="p-4">{plan.amount}</td>
								<td className="p-4">
									<div className="flex w-full items-center rounded-full bg-slate-300 p-2">
										<div
											className="h-2 rounded-full bg-project-blue-100"
											style={{
												width: `${((plan.amount / totalAmount) * 100).toFixed(0)}%`,
											}}
										></div>
									</div>
								</td>
							</tr>
						))}
						<tr className="text bg-black text-project-blue-100">
							<td className="p-4" colSpan={2}>
								Montante Total
							</td>
							<td className=" p-4">R$ {totalAmount}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}
