import { api } from '@/config/axios'
import { useMutation } from '@tanstack/react-query'

export const SignIn: React.FC = () => {
	const signIn = (): Promise<string> => {
		return api
			.post('/auth/signIn', {
				email: 'igorribeiro632@gmail.com',
				password: '1234',
			})
			.then((res) => res.data.access_token)
			.catch((err) => console.log(err))
	}

	const { data, mutate } = useMutation({
		mutationKey: ['signIn'],
		mutationFn: signIn,
	})

	return (
		<div className="text-bold grid h-full w-full  lg:grid-cols-5 xl:grid-cols-3">
			<div className="from-project-blue-300  via-project-blue-200 to-project-blue-100 hidden bg-gradient-to-r lg:col-span-3 lg:flex xl:col-span-2"></div>
			<div className="bg-project-gray-900 flex items-center justify-center bg-red-500 lg:col-span-2 xl:col-span-1">
				<div className="flex w-3/5 flex-col items-center justify-center gap-4">
					<input type="text" className="rounded-md p-3" />
					<input type="text" className="rounded-md p-3" />
					<input type="text" className="rounded-md p-3" />
					<p className="h-32 overflow-y-auto break-all">{data}</p>
					<button
						className="bg-project-blue-100 h-10 w-32 self-end"
						onClick={() => mutate()}
					>
						Botão
					</button>
				</div>
			</div>
		</div>
	)
}
