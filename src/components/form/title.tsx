import { ReactNode } from 'react'

type H1Type = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLHeadingElement>,
	HTMLHeadingElement
>

type TitleInterface = H1Type & {
	children: ReactNode
}

export const Title = ({ children, ...props }: TitleInterface) => {
	return <h1 {...props}>{children}</h1>
}
