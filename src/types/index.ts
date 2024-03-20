export interface IRoutes {
	link: string
	element: any
	id: number
}
export interface IAsync {
	id?: any
	name: string
	price: string
	image: string
	discription: string
	category: string
}
export interface IInputValue {
	id?: string
	name: string
	price: string
	image: string
	discription: string
	category: string
}
 export interface IBasketItem extends IAsync {
	quantity: number
}