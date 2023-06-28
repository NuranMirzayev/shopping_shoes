import { createSlice } from "@reduxjs/toolkit";


const UserSlice = createSlice({
    name: 'google',
    initialState: {
        email: null,
        id: null,
        token: null,
        firstName:null,
        lastName:null
    },
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.token = action.payload.token;

            localStorage.setItem("email", action.payload.email)
        },
        dataUser: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;

            // localStorage.setItem("firstName", action.payload.firstName)

        },
        removeUser: (state) => {
            state.email = null;
            state.id = null;
            state.token = null;
            localStorage.removeItem('email')
        }
    }
})

export const { setUser, removeUser } = UserSlice.actions
export default UserSlice.reducer