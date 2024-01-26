import { configureStore } from '@reduxjs/toolkit'

import favoriteReducer from '../features/FavoritesCart/FavoriteSlice'
import cartReducer from '../features/ShoppingCart/CartSlice'
import googleReducer from '../features/User/GoogleSlice'
import userReducer from '../features/User/UserSlice'

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		favorite: favoriteReducer,
		user: userReducer,
		google: googleReducer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
