import { useState } from 'react'
import { tv } from 'tailwind-variants'
import { SidebarItem } from './item'

// export type SidebarProps = {}

const button = tv({
	base: 'relative h-full rounded-r-3xl bg-project-gray-900 duration-300 flex flex-col items-center px-4 py-6',
	variants: {
		open: {
			true: 'w-72',
			false: 'w-24',
		},
	},
	defaultVariants: {
		open: true,
	},
})

export const Sidebar: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(true)

	const menus = [
		{
			image: '',
			title: 'Home',
		},
		{
			image: '',
			title: 'Dashboard',
		},
	]

	const toggleOpen = () => setIsOpen((isOpen) => !isOpen)
	return (
		<div
			className={button({
				open: isOpen,
			})}
		>
			<button
				onClick={toggleOpen}
				className="absolute -right-6 bottom-8 h-14 w-14 rounded-full bg-project-gray-500 text-lg font-semibold text-white"
			>
				{isOpen ? '<' : '>'}
			</button>

			<div
				className={`
          mb-10 flex w-full items-center gap-4 
          ${!isOpen && 'flex-col'}
        `}
			>
				<div
					className={`min-h-[48px]  min-w-[48px] cursor-pointer bg-project-gray-500 duration-300 
          ${isOpen && 'rotate-[360deg]'}`}
				/>

				<h1
					className={`
            origin-left text-lg text-white duration-300 
            ${!isOpen && 'scale-0 text-[0px] leading-[0px]'}
          `}
				>
					Teste
				</h1>
			</div>

			<div className="flex w-full flex-col gap-4">
				{menus.map(({ title, image }) => (
					<SidebarItem key={title} open={isOpen} title={title} image={image} />
				))}
			</div>
		</div>
	)
}
