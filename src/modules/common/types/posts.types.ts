export interface IPosts{
	_id: string;
	title: string;
	text: string;
	tags: [string]
	viewCount: number
	user: any;
	imageUrl: string;
	price: number;
	createdAt: string;
	updatedAt: string;
	__v:number;
}
