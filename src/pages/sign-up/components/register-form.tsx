import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import useNotification from '@/hooks/useNotification'
import { Form } from '@/components/form'
import { User } from '@/types/user'
import { useMutation } from '@tanstack/react-query'
import { Register } from '../services/register'

export const RegisterForm: React.FC = () => {
	const notification = useNotification()
	const [loading, setLoading] = useState(false)

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

	const registerMutation = useMutation({
		mutationKey: ['signUp'],
		mutationFn: Register,
	})

	const toggleLoading = () => setLoading((loading) => !loading)

	async function signUp({
		firstName,
		lastName,
		email,
		cpf,
		password,
	}: SignUpFormData) {
		toggleLoading()

		try {
			const { id } = await registerMutation.mutateAsync({
				name: firstName + ' ' + lastName,
				email,
				cpf,
				password,
			})

			!id
				? notification({
						type: 'error',
						message: `Erro ao cadastrar o usuário`,
				  })
				: notification({
						type: 'success',
						message: `Cadastro efetuado com sucesso!`,
				  })
		} catch (error) {
			notification({ type: 'error', message: `Erro ao efetuar o cadastro.` })
		} finally {
			toggleLoading()
		}
	}

	const { handleSubmit } = signUpForm

	return (
		<FormProvider {...signUpForm}>
			<form
				onSubmit={handleSubmit(signUp)}
				className="m-auto flex w-4/5 flex-col gap-5"
			>
				<Form.Title className="mb-4 text-4xl font-bold text-amber-500">
					Faça seu Cadastro
				</Form.Title>

				<Form.Field>
					<Form.Input
						name="firstName"
						type="text"
						placeholder="Digite seu primeiro nome"
						className="rounded-md p-3"
					/>
					<Form.ErrorMessage field="firstName" />
				</Form.Field>

				<Form.Field>
					<Form.Input
						name="lastName"
						type="text"
						placeholder="Digite seu último nome"
						className="rounded-md p-3"
					/>
					<Form.ErrorMessage field="lastName" />
				</Form.Field>

				<Form.Field>
					<Form.Input
						name="cpf"
						type="text"
						placeholder="Digite seu CPF"
						className="rounded-md p-3"
					/>
					<Form.ErrorMessage field="cpf" />
				</Form.Field>

				<Form.Field>
					<Form.Input
						name="email"
						type="email"
						placeholder="Digite seu e-mail"
						className="rounded-md p-3"
					/>
					<Form.ErrorMessage field="email" />
				</Form.Field>

				<Form.Field>
					<Form.Input
						name="password"
						type="password"
						placeholder="Digite sua senha"
						className="rounded-md p-3"
					/>
					<Form.ErrorMessage field="password" />
				</Form.Field>

				<div className="flex items-center">
					<span className="flex-grow text-end text-white">
						Já tenho uma conta
					</span>
				</div>
				<Form.Button
					disabled={loading}
					className="grow rounded-md bg-project-blue-100 py-3 text-white"
				>
					{loading ? 'Carregando...' : 'Cadastrar'}
				</Form.Button>
			</form>
		</FormProvider>
	)
}
