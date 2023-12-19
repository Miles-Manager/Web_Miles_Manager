import { toast } from 'react-toastify'

export enum NOTIFICATION_TYPES {
	SUCCESS = 'success',
	ERROR = 'error',
	WARNING = 'warning',
}

function useNotification() {
	return (type: NOTIFICATION_TYPES, message: string, delay?: number) =>
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
