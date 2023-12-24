import useNotification from '@/hooks/useNotification'
import { Form } from '@components/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Login } from '@services/sign-in/login'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { z } from 'zod'

export const LoginForm: React.FC = () => {
	const notification = useNotification()
	const [loading, setLoading] = useState(false)

	const signInSchema = z.object({
		email: z
			.string()
			.min(1, 'O e-mail é obrigatório')
			.email('Formato de e-mail inválido')
			.toLowerCase(),

		password: z
			.string()
			.min(1, 'A senha é obrigatória')
			.min(4, 'A senha precisa ter no mínimo 6 caracteres'),
	})

	type SignInFormData = z.infer<typeof signInSchema>

	const signInForm = useForm<SignInFormData>({
		resolver: zodResolver(signInSchema),
	})

	const loginMutation = useMutation({
		mutationKey: ['signIn'],
		mutationFn: Login,
	})

	async function signIn({ email, password }: SignInFormData) {
		setLoading(true)
		try {
			const { accessToken, response } = await loginMutation.mutateAsync({
				email,
				password,
			})

			if (!accessToken) {
				const { message } = response?.data
				notification({ type: 'error', message: `Error: ${message}` })
				return
			}
			notification({ type: 'success', message: JSON.stringify(accessToken) })
		} catch (error) {
			notification({
				type: 'error',
				message: JSON.stringify(
					`Erro inesperado: ${JSON.stringify(error, null, 2)}`,
				),
			})
		} finally {
			setLoading(false)
		}
	}

	const { handleSubmit } = signInForm

	return (
		<>
			<FormProvider {...signInForm}>
				<form
					onSubmit={handleSubmit(signIn)}
					className="m-auto flex w-3/5 flex-col gap-6"
				>
					<Form.Title className="mb-4 text-5xl font-bold text-amber-500">
						Faça seu login
					</Form.Title>
					<Form.Field>
						<Form.Input
							name="email"
							placeholder="Digite seu e-mail"
							className="rounded-md p-3"
						/>
						<Form.ErrorMessage field="email" className="text-amber-500" />
					</Form.Field>

					<Form.Field>
						<Form.Input
							name="password"
							type="password"
							min={6}
							placeholder="Digite sua senha"
							className="rounded-md p-3"
						/>
						<Form.ErrorMessage field="password" className="text-amber-500" />
					</Form.Field>

					<div className="flex items-center">
						<span className="flex-grow text-white">Esqueceu a senha?</span>
						<Form.Button
							disabled={loading}
							className="grow rounded-md bg-project-blue-100 py-3 text-white "
						>
							{loading ? 'Carregando...' : 'Entrar'}
						</Form.Button>
					</div>
				</form>
			</FormProvider>
			<ToastContainer />
		</>
	)
}
