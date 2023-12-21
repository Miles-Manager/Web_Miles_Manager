import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import useNotification, { NOTIFICATION_TYPES } from '@/hooks/useNotification'
import { Form } from '@/components/form'
import aircraft from '@/assets/aircraft.svg'

export const SignUp: React.FC = () => {
	const [loading, setLoading] = useState(false)
	const notification = useNotification()

	const signUpSchema = z.object({
		firstName: z.string().min(1, 'Insira seu primeiro nome'),
		lastName: z.string().min(1, 'Insira seu último nome'),
		cpf: z.string().min(14).max(14),
		email: z
			.string()
			.email('Formato de e-mail inválido')
			.min(1, 'Insira o email')
			.toLowerCase(),
		password: z.string().min(6, 'A senha precisa ter no mínimo 6 caracteres'),
	})

	type SignUpFormData = z.infer<typeof signUpSchema>

	const signUpForm = useForm<SignUpFormData>({
		resolver: zodResolver(signUpSchema),
	})

	async function signUp(data: SignUpFormData) {
		toggleLoading(true)
		try {
			await SignUp(data)
			notification(NOTIFICATION_TYPES.SUCCESS, `Login efetuado com sucesso!`)
		} catch (error) {
			notification(NOTIFICATION_TYPES.ERROR, `Erro ao efetuar o login.`)
		} finally {
			toggleLoading(false)
		}
	}

	function toggleLoading(value: boolean) {
		setLoading(value)
	}

	const { handleSubmit } = signUpForm

	return (
		<div className="grid h-[100vh] w-[100vw] grid-cols-2 max-md:grid-cols-1">
			<div className="flex w-4/5 bg-project-blue-200 max-lg:w-full">
				<FormProvider {...signUpForm}>
					<form
						onSubmit={handleSubmit(signUp)}
						className="m-auto flex w-4/5 flex-col gap-5"
					>
						<Form.Title>Faça seu Cadastro</Form.Title>

						<Form.Field>
							<Form.Input
								name="firstName"
								type="text"
								placeholder="Digite seu primeiro nome"
								className="input-form"
							/>
							<Form.ErrorMessage field="firstName" />
						</Form.Field>

						<Form.Field>
							<Form.Input
								name="lastName"
								type="text"
								placeholder="Digite seu último nome"
								className="input-form"
							/>
							<Form.ErrorMessage field="lastName" />
						</Form.Field>

						<Form.Field>
							<Form.Input
								name="cpf"
								type="text"
								placeholder="Digite seu CPF"
								className="input-form"
							/>
							<Form.ErrorMessage field="cpf" />
						</Form.Field>

						<Form.Field>
							<Form.Input
								name="email"
								type="email"
								placeholder="Digite seu e-mail"
								className="input-form"
							/>
							<Form.ErrorMessage field="email" />
						</Form.Field>

						<Form.Field>
							<Form.Input
								name="password"
								type="password"
								placeholder="Digite sua senha"
								className="input-form"
							/>
							<Form.ErrorMessage field="password" />
						</Form.Field>

						<div className="flex justify-between">
							<span>Esqueceu a senha?</span>
							<span>Já tenho uma conta</span>
						</div>
						<Form.Button disabled={loading}>
							{loading ? 'Carregando...' : 'Entrar'}
						</Form.Button>
					</form>
				</FormProvider>
			</div>
			<div className="flex max-md:hidden">
				<img src={aircraft} alt="Aircraft" className="m-auto h-[70vh]" />
			</div>
		</div>
	)
}
