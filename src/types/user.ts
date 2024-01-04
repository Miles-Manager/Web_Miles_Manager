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
	profile: Profile[]
	role: keyof typeof ROLES
	createdAt: Date
}
