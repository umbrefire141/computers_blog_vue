import { IUser } from '@/types/user.interface';
import axios from '@/utils/axios';
import { defineStore } from 'pinia';
import { ISignUpProps } from './auth.interface';

export const uesrStore = defineStore('user', {
	state: () => ({ user: null as IUser | null, error: null }),

	getters: {
		async getMe() {
			const { data } = await axios.get('auth/getMe');
			localStorage.setItem('accessToken', data.accessToken);
			this.user = data;
		},

		logout() {
			localStorage.removeItem('accessToken');
		},
	},

	actions: {
		async signUp(dto: ISignUpProps) {
			try {
				const { data } = await axios.post('auth/sign-up', dto);
				localStorage.setItem('accessToken', data.accessToken);
				this.user = data.user;
			} catch (error: any) {
				this.error = error.response.data.message;
			}
		},

		async signIn(dto: Pick<ISignUpProps, 'email' | 'password'>) {
			try {
				const { data } = await axios.post('auth/sign-in', dto);
				localStorage.setItem('accessToken', data.accessToken);
				this.user = data;
			} catch (error: any) {
				this.error = error.response.data.message;
			}
		},
	},
});
