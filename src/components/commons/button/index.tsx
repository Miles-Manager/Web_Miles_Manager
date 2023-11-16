import { ButtonHTMLAttributes } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
	base: 'flex items-center justify-center rounded-lg',
	variants: {
		size: {
			lg: 'h-12 px-4 py-3 text-lg',
			default: 'h-10 px-3 py-2',
			sm: 'h-8 px-2 py-1',
			xs: 'h-6 px-2 py-1 text-sm',
		},
		color: {
			default: 'bg-gray-500 text-white',
			danger: 'bg-red-500 text-white',
			success: 'bg-green-500 text-white',
		},
	},
	defaultVariants: {
		size: 'default',
		color: 'default',
	},
})

export const sizes = button.variants.size
export const colors = button.variants.color

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof button> & {
		text: string
	}

export const Button: React.FC<ButtonProps> = ({
	color,
	size,
	className,
	text,
	...props
}) => {
	return (
		<button className={button({ color, size, className })} {...props}>
			{text}
		</button>
	)
}
