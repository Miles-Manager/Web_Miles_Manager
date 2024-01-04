import { toast } from 'react-toastify'

type UseNotificationType = {
	type: 'success' | 'error' | 'warning'
	message: string
	delay?: number
}

function useNotification() {
	return ({ message, type, delay }: UseNotificationType) =>
		toast[type](message, {
			theme: 'light',
			draggable: true,
			closeOnClick: true,
			pauseOnHover: true,
			progress: undefined,
			position: 'top-right',
			hideProgressBar: false,
			autoClose: delay || 3000,
		})
}

export default useNotification
