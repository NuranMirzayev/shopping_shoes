import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState,
} from 'react'

export type Product = {
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

export interface ModalContextProvider {
	product: Product
	setProduct: Dispatch<SetStateAction<Product>>
	closeModal: () => void
	openModal: (props: SetStateAction<Product>) => void
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

interface ModalProviderProps {
	children: ReactNode
}

export const ModalWindowsContext = createContext<ModalContextProvider>({
	product: { name: '', price: 0, isLike: false, id: '' }, // Initialize with default values
	setProduct: () => {},
	closeModal: () => {},
	openModal: () => {},
	isOpen: false,
	setIsOpen: () => {},
})

export const MWProviders = ({ children }: ModalProviderProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const [product, setProduct] = useState<Product>({
		name: '',
		price: 0,
		isLike: false,
		id: '',
	})

	const openModal = (props: SetStateAction<Product>) => {
		setIsOpen(!isOpen)
		setProduct(prevProduct => ({
			...prevProduct,
			...props,
		}))
		console.log('Open successfully')
	}

	const closeModal = () => {
		setIsOpen(false)
	}

	const value = {
		product,
		setProduct,
		isOpen,
		setIsOpen,
		closeModal,
		openModal,
	}

	return (
		<ModalWindowsContext.Provider value={value}>
			{children}
		</ModalWindowsContext.Provider>
	)
}
