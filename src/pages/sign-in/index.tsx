import aircraft from '@/assets/aircraft.svg'
import { LoginForm } from './components/loginForm'

export const SignIn: React.FC = () => {
	return (
		<div className="text-bold grid h-full w-full lg:grid-cols-5 xl:grid-cols-3">
			<div className="hidden h-auto w-auto bg-white lg:col-span-3 lg:flex xl:col-span-2">
				<div className="m-auto flex h-[50vh] w-[50vw] ">
					<img src={aircraft} alt="Aircraft" className="h-full w-full" />
				</div>
			</div>
			<div className="flex flex-col items-center bg-project-blue-200 lg:col-span-2 xl:col-span-1">
				<LoginForm />
				<div className="mb-6">
					<span className=" text-white">Não possui uma conta? </span>
					<a
						className=" text-decoration-line: text-amber-500 underline"
						href="/sign-up"
					>
						Criar agora
					</a>
				</div>
			</div>
		</div>
	)
}
