import { ReactNode } from 'react'

interface TitleInterface {
	children: ReactNode
}

export const Title = ({ children, ...props }: TitleInterface) => {
	return <h1 {...props}>{children}</h1>
}
