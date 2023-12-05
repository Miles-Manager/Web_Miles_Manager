export const SignUp: React.FC = () => {
	return (
		<div className="text-bold grid h-full w-full  lg:grid-cols-5 xl:grid-cols-3">
			<div className="flex items-center bg-project-gray-900 lg:col-span-2 xl:col-span-1">
				<div className="m-auto flex w-3/5 flex-col gap-4">
					<input type="text" className="rounded-md p-3" />
					<input type="text" className="rounded-md p-3" />
					<input type="text" className="rounded-md p-3" />
					<button className="h-10 w-32 self-end bg-project-blue-100">
						Botão
					</button>
				</div>
			</div>
			<div className="hidden  bg-gradient-to-r from-project-blue-300 via-project-blue-200 to-project-blue-100 lg:col-span-3 lg:flex xl:col-span-2"></div>
		</div>
	)
}
