import { useContext } from 'react'
import { UserContext } from './user-provider'

export const useUserContext = () => {
	return useContext(UserContext)
}
