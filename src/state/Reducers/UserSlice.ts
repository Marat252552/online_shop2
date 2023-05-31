import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User_T } from "../../Components/Shared/types";
import { useAppDispatch } from "../hooks";

type initialState_T = {
    _id: string,
    login: string
}

const initialState: initialState_T = {
    _id: '',
    login: ''
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setData(state, action: PayloadAction<User_T>) {
            state._id = action.payload._id
            state.login = action.payload.login
        }
    }
})



export default UserSlice