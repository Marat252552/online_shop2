import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Statuses, User_T } from "../../Components/Shared/types";

type initialState_T = {
    user: User_T,
    token: string
}

const initialState: initialState_T = {
    user: {
        _id: '',
        login: '',
        status: Statuses.user
    },
    token: localStorage.getItem('accessToken') || ''
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<{user: User_T}>) {
            state.user = action.payload.user
        },
        setToken(state, action: PayloadAction<{accessToken: string}>) {
            let { accessToken } = action.payload
            state.token = accessToken
            localStorage.setItem('accessToken', accessToken)
        },
        logout(state) {
            state.user = {login: '', _id: '', status: Statuses.user}
            state.token = ''
            localStorage.removeItem('accessToken')
        }
    }
})



export default UserSlice