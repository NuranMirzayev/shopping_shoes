import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../features/ShoppingCart/CartSlice';
import userReducer from '../features/User/UserSlice';
import googleReducer from '../features/User/GoogleSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    google: googleReducer
  },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;