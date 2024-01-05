import aircraft from '@/assets/aircraft.svg'
import { RegisterForm } from './components/register-form'

export const SignUp: React.FC = () => {
	return (
		<div className="grid h-[100vh] w-[100vw] grid-cols-2 max-md:grid-cols-1">
			<div className="flex w-4/5 bg-project-blue-200 max-lg:w-full">
				<RegisterForm />
			</div>
			<div className="flex max-md:hidden">
				<img src={aircraft} alt="Aircraft" className="m-auto h-[70vh]" />
			</div>
		</div>
	)
}
