import { createSlice } from "@reduxjs/toolkit";


const GoogleSlice = createSlice({
    name: 'user',
    initialState: {
        emailGoogle: null,
        idGoogle: null,
        tokenGoogle: null,
        firstNameGoogle: null,
        lastNameGoogle: null
    },
    reducers: {
        setGoogle: (state, action) => {
            state.emailGoogle = action.payload.emailGoogle;
            state.idGoogle = action.payload.idGoogle;
            state.tokenGoogle = action.payload.tokenGoogle;
            localStorage.setItem('emailGoogle', action.payload.emailGoogle)
        },
        dataGoogle: (state, action) => {
            state.firstNameGoogle = action.payload.firstNameGoogle;
            state.lastNameGoogle = action.payload.lastNameGoogle;
        },
        removeGoogle: (state) => {
            // localStorage.removeItem(removeGoogle())
            state.emailGoogle = null;
            state.idGoogle = null;
            state.tokenGoogle = null;
            localStorage.removeItem('emailGoogle')
        }
    }
})

export const { setGoogle, removeGoogle, dataGoogle } = GoogleSlice.actions
export default GoogleSlice.reducer