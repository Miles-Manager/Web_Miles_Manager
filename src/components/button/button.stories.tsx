import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps, sizes, colors } from '.'

export default {
	title: 'Component/Commons/Button',
	component: Button,
	tags: ['autodocs'],
	args: {
		text: 'Cadastrar',
		size: 'default',
		color: 'default',
	},
	argTypes: {
		size: {
			options: Object.keys(sizes),
			control: { type: 'inline-radio' },
		},
		color: {
			options: Object.keys(colors),
			control: { type: 'inline-radio' },
		},
	},
	parameters: {
		children: 'Text',
	},
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}
