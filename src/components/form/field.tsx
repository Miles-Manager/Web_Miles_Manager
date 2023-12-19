import { HTMLAttributes } from 'react'

interface FieldProps extends HTMLAttributes<HTMLDivElement> {}

export const Field = (props: FieldProps) => {
	return <div {...props} className="flex w-full flex-col" />
}
