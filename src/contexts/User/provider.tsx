import {
	FC,
	useState,
	createContext,
	SetStateAction,
	PropsWithChildren,
	useMemo,
	useEffect,
} from 'react'
import { User } from '../../types/user'

type PropsWithReactNode = {
	children?: React.ReactNode
}

type UserContextData = {
	loggedStatus?: boolean
	setLoggedStatus: React.Dispatch<SetStateAction<boolean>>
	user?: User
	setUser: React.Dispatch<SetStateAction<User | undefined>>
}

export const UserContext = createContext({} as UserContextData)

export const UserProvider: FC<PropsWithChildren<PropsWithReactNode>> = ({
	children,
}) => {
	const userStorage = JSON.parse(localStorage.getItem('user')!)
	const [user, setUser] = useState<User>()

	const status = localStorage.getItem('loggedStatusVariable')
	const [loggedStatus, setLoggedStatus] = useState<boolean>(!!status)

	useEffect(() => {
		if (userStorage) {
			setUser(userStorage)
		}
	}, [userStorage])

	const values = useMemo(() => {
		return {
			user,
			setUser,
			loggedStatus,
			setLoggedStatus,
		}
	}, [user, loggedStatus])

	return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}
