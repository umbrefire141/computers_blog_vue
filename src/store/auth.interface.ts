import { IUser } from '@/types/user.interface';

export interface ISignUpProps extends Pick<IUser, 'email' | 'name'> {
	password: string;
}
