import { IUser } from './user.interface';

export interface IPost {
	id: number;
	img: string;
	title: string;
	content: string;
	published: string;
	author: IUser;
}
