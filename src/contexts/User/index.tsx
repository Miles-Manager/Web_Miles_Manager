import { useContext } from 'react'
import { UserContext } from './provider'

export const useUserContext = () => {
	return useContext(UserContext)
}
