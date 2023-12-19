import aircraft from '@/assets/aircraft.svg'

export const SignUp: React.FC = () => {
	return (
		<div className="text-bold grid h-full w-full lg:grid-cols-5 xl:grid-cols-3">
			<div className="flex items-center bg-project-blue-200 lg:col-span-2 xl:col-span-1">
				<div className="m-auto flex w-3/5 flex-col gap-4">
					<input type="text" placeholder="Nome" className="rounded-md p-3" />
					<input type="email" placeholder="E-mail" className="rounded-md p-3" />
					<input
						type="password"
						placeholder="Senha"
						className="rounded-md p-3"
					/>
					<button className="font-semiboldbold h-10 w-[100%] self-center rounded-md bg-project-blue-100 text-white ">
						Cadastrar
					</button>
					<div className="flex gap-3">
						<span className=" text-white">Não possui uma conta?</span>
						<a
							className=" text-decoration-line: text-amber-500 underline"
							href="/"
						>
							Criar aqui
						</a>
					</div>
				</div>
			</div>

			<div className="hidden h-auto w-auto bg-white lg:col-span-3 lg:flex xl:col-span-2">
				<div className="m-auto flex h-[50vh] w-[50vw] ">
					<img src={aircraft} alt="Aircraft" className="h-full w-full" />
				</div>
			</div>
		</div>
	)
}
