enum ROlES {
	ADMIN,
	USER,
}

export type User = {
	id: string
	email: string
	password: string
	roles: ROlES
	created_at: Date
}
