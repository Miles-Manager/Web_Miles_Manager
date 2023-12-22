import { HTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

type ErrorMessageProps = HTMLAttributes<HTMLSpanElement> & {
	field: string
}

const get = (obj: Record<string | number | symbol, any>, path: string) => {
	const travel = (regexp: RegExp) =>
		String.prototype.split
			.call(path, regexp)
			.filter(Boolean)
			.reduce(
				(res, key) => (res !== null && res !== undefined ? res[key] : res),
				obj,
			)

	const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/)

	return result
}

export const ErrorMessage = ({ field, ...props }: ErrorMessageProps) => {
	const {
		formState: { errors },
	} = useFormContext()

	const fieldError = get(errors, field)

	if (!fieldError) {
		return null
	}

	return (
		<span className="text-red-500" {...props}>
			{fieldError.message?.toString()}
		</span>
	)
}
