import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { allProducts } from '../../utils/types'

interface CartState {
	items: allProducts[]
	cartTotalQuantity: number
	cartTotalAmount: number
}

const takeItems = localStorage.getItem('items')

const initialState: CartState = {
	items: takeItems ? JSON.parse(takeItems) : [],
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
}

export const CartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<allProducts>) => {
			const itemIndex = state.items.findIndex(
				item =>
					item.id === action.payload.id && item.size === action.payload.size
			)
			if (itemIndex >= 0) {
				state.items[itemIndex].cartQuantity += 1
				toast.info(`increased ${state.items[itemIndex].name} cart quantuty`, {
					position: 'bottom-left',
				})
			} else {
				const tempItemProduct = { ...action.payload, cartQuantity: 1 }
				state.items.push(tempItemProduct)
				toast.success(`${action.payload.name} to cart`, {
					position: 'bottom-left',
				})
			}
			localStorage.setItem('items', JSON.stringify(state.items))
		},
		removeItem: (state, action: PayloadAction<allProducts>) => {
			const index = state.items.filter(
				item =>
					item.id !== action.payload.id && item.size !== action.payload.size
			)
			const remainingItems = state.items.filter(item => {
				if (item.id === action.payload.id) {
					return item.size !== action.payload.size
				}
				return true
			})
			state.items = index
			state.items = remainingItems

			localStorage.setItem('items', JSON.stringify(state.items))
			toast.error(`${action.payload.name} remove from cart`, {
				position: 'bottom-left',
			})
		},
		minQuanty: (state, action: PayloadAction<allProducts>) => {
			const itemIndex = state.items.findIndex(
				item => item.id === action.payload.id
			)
			if (state.items[itemIndex].cartQuantity > 1) {
				state.items[itemIndex].cartQuantity -= 1
				toast.info(`Decreased ${action.payload.name} cart quantity`, {
					position: 'bottom-left',
				})
			} else if (state.items[itemIndex].cartQuantity === 1) {
				const index = state.items.filter(item => item.id !== action.payload.id)

				state.items = index

				toast.error(`${action.payload.name} remove from cart`, {
					position: 'bottom-left',
				})
			}
			localStorage.setItem('items', JSON.stringify(state.items))
		},
		getAllTotal: state => {
			let { total, quantity } = state.items.reduce(
				(cartTotal, cartitem) => {
					const { price, cartQuantity } = cartitem
					const itemTotal = price * cartQuantity

					cartTotal.total += itemTotal
					cartTotal.quantity += cartQuantity
					return cartTotal
				},
				{
					total: 0,
					quantity: 0,
				}
			)
			state.cartTotalAmount = total
			state.cartTotalQuantity = quantity
		},
	},
})

export const { addItem, removeItem, minQuanty, getAllTotal } = CartSlice.actions
export default CartSlice.reducer

// Vvivod:
// S pomoshmu addItems mojno uvelichit kolichestvu quantity(yedinicno) logicno dobavit i eto i yest +.
// Dobavlaya ewe odnu slice dlya umensheniye mojno umenshit kolicestvo quantity(yedinicno)
