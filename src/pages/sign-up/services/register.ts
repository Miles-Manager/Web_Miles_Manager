import { api } from '@/config/axios'
import { User } from '@/types/user'

export type RegisterParams = {
	name: string
	email: string
	cpf: string
	password: string
}

export const Register = async (data: RegisterParams): Promise<User> => {
	return api
		.post('/user', data)
		.then((res) => res.data)
		.catch((error) => error)
}
