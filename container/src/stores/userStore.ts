import { create } from 'zustand'

export enum LocalStorageSessionKeys {
	userId = 'user-id',
	userToken = 'user-token',
}

interface UserStore {
	id: number
	token: string
	setSession: (id: number, token: string) => void
	clearSession: () => void
}

export const useUserStore = create<UserStore>((set) => ({
	id: 0,
	token: '',
	setSession: (id, token) => {
		set({ id, token })
		localStorage.setItem(
			LocalStorageSessionKeys.userId,
			id as unknown as string
		)
		localStorage.setItem(LocalStorageSessionKeys.userToken, token)
	},
	clearSession: () => {
		set({ id: 0, token: '' })
		localStorage.removeItem(LocalStorageSessionKeys.userId)
		localStorage.removeItem(LocalStorageSessionKeys.userToken)
	},
}))
