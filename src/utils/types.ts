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

///Auth

// export interface PWD {
//     password: string
// }

// export interface UserData {
//     email?:null,
//     id?:null,
//     token?: null,
// }

// enum GenderEnum {
//     female = "female",
//     male = "male",
//     other = "other"
// }

// export interface IFormInput extends PWD {
//     firstName: string;
//     lastName: string;
//     age: number;
//     gender: GenderEnum;
//     check: string;
//     dateOfBirthday: string;
//     email: string,

// }
