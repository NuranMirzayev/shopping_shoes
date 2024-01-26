import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { allProducts } from '../../utils/types'

interface FavoriteState {
	itemsFavorites: allProducts[]
	favoriteTotalQuantity: number
}

const takeFavoriteItems = localStorage.getItem('favoriteItems')

const initialState: FavoriteState = {
	itemsFavorites: takeFavoriteItems ? JSON.parse(takeFavoriteItems) : [],
	favoriteTotalQuantity: 0,
}

export const FavoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addToFavorites: (state, action: PayloadAction<allProducts>) => {
			const isAlreadyInFavorites = state.itemsFavorites.findIndex(
				item =>
					item.id === action.payload.id && item.size === action.payload.size
			)

			if (isAlreadyInFavorites >= 0) {
				state.itemsFavorites[isAlreadyInFavorites].likeQuantity += 1
				toast.info(
					`increased ${state.itemsFavorites[isAlreadyInFavorites].name} favorite quantuty`,
					{
						position: 'bottom-left',
					}
				)
			} else {
				const tempFavorProduct = { ...action.payload, likeQuantity: 1 }
				state.itemsFavorites.push(tempFavorProduct)
				state.favoriteTotalQuantity += 1
				toast.success(`${action.payload.name} to favorites`, {
					position: 'bottom-left',
				})
			}
			localStorage.setItem(
				'favoriteItems',
				JSON.stringify(state.itemsFavorites)
			)
		},
		removeFromFavorites: (state, action: PayloadAction<allProducts>) => {
			const remainingFavorites = state.itemsFavorites.filter(
				item =>
					!(item.id === action.payload.id && item.size === action.payload.size)
			)
			state.favoriteTotalQuantity -= 1
			state.itemsFavorites = remainingFavorites
			localStorage.setItem(
				'favoriteItems',
				JSON.stringify(state.itemsFavorites)
			)
			toast.error(`${action.payload.name} removed from favorites`, {
				position: 'bottom-left',
			})
		},
		getAllTotalFavorite: state => {
			let { quantity } = state.itemsFavorites.reduce(
				(favoriteTotal, favoriteitem) => {
					const { price, likeQuantity } = favoriteitem
					const itemTotal = price * likeQuantity

					favoriteTotal.total += itemTotal
					favoriteTotal.quantity += likeQuantity
					return favoriteTotal
				},
				{
					total: 0,
					quantity: 0,
				}
			)
			// state.cartTotalAmount = total
			state.favoriteTotalQuantity = quantity
		},
	},
})

export const { addToFavorites, removeFromFavorites, getAllTotalFavorite } =
	FavoriteSlice.actions
export default FavoriteSlice.reducer
