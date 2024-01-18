export type ItemProps = {
	open: boolean
	title: string
	image: string
}

export const SidebarItem: React.FC<ItemProps> = ({ open, title }) => {
	return (
		<div
			className={`flex w-full items-center ${
				!open ? 'flex-col gap-0' : 'gap-4'
			}`}
		>
			<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-project-gray-500">
				<div className="h-8 w-8 bg-project-gray-700"></div>
			</div>
			<h3
				className={`origin-left text-lg text-white duration-300 ${
					!open && 'scale-0 text-[0px] leading-[0px]'
				}`}
			>
				{title}
			</h3>
		</div>
	)
}
