export interface Item {
	title: string
	route: string
}

export interface ImgUrl {
	imgUrl: string
}

export interface Img extends ImgUrl {
	id: number
}

export interface IUserData {
	_id: string
	nameD: string | null
	avatar: string | null
}

///Test

export interface allProducts {
	mainImg?: string
	description?: string
	name: string
	price: number
	firsImg?: string
	secondImg?: string
	threeImg?: string
	category?: string
	gender?: string
	sale?: number
	isLike: boolean
	id: number | string
	newArrivals?: string
	sizeMain?: []
	cartQuantity?: number | any
	size?: string
}

export interface SelectedFilterType {
	titleOption: string
	selectOption: string
	value: number
}
