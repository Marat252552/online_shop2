import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthAPI from "../API/AuthAPI/AuthAPI";
import UserSlice from "./Reducers/UserSlice";
import AdminAPI from "../API/AdminAPI/AdminAPI";
import RestAPI from "../API/RestAPI";


const rootReducer = combineReducers({
    [AuthAPI.reducerPath]: AuthAPI.reducer,
    [AdminAPI.reducerPath]: AdminAPI.reducer,
    [RestAPI.reducerPath]: RestAPI.reducer,
    UserSlice: UserSlice.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            AuthAPI.middleware,
            AdminAPI.middleware,
            RestAPI.middleware
        ])
    })
}
// Тип корневого 
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']