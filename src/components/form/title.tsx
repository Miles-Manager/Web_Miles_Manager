import { ReactNode } from 'react'

interface TitleInterface {
	children: ReactNode
}

export const Title = ({ children }: TitleInterface) => {
	return (
		<h1 className="text-project-green-200 text-center text-4xl font-bold xl:text-5xl 2xl:text-7xl">
			{children}
		</h1>
	)
}
