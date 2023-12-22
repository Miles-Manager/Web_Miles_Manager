import { api } from '@/config/axios'

export type LoginParams = {
	email: string
	password: string
}

export type LoginOutput = Promise<{
	accessToken: string
	response: {
		data: {
			statusCode: number
			message: string
		}
	}
}>

export const Login = async (data: LoginParams): LoginOutput => {
	return api
		.post('/auth/signIn', data, {
			withCredentials: true,
		})
		.then((res) => res.data)
		.catch((error) => error)
}
