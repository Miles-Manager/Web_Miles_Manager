enum ROLES {
	ADMIN,
	USER,
}

type Profile = {
	id: string
	name: string
	userId: string
}

export type User = {
	id: string
	name: string
	email: string
	cpf: string
	password: string
	profile: Profile[]
	roles: ROLES
	created_at: Date
}
