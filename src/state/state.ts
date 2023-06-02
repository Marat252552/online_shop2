import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthAPI from "../API/AuthAPI/AuthAPI";
import UserSlice from "./Reducers/UserSlice";
import AdminAPI from "../API/AdminAPI/AdminAPI";
import BrandsAPI from "../API/BrandsAPI/BrandsAPI";
import TypesAPI from "../API/TypesAPI/TypesAPI";
import ItemsAPI from "../API/ItemsAPI/ItemsAPI";

const rootReducer = combineReducers({
    [AuthAPI.reducerPath]: AuthAPI.reducer,
    [AdminAPI.reducerPath]: AdminAPI.reducer,
    [BrandsAPI.reducerPath]: BrandsAPI.reducer,
    [TypesAPI.reducerPath]: TypesAPI.reducer,
    [ItemsAPI.reducerPath]: ItemsAPI.reducer,
    UserSlice: UserSlice.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            AuthAPI.middleware,
            AdminAPI.middleware,
            BrandsAPI.middleware,
            TypesAPI.middleware,
            ItemsAPI.middleware
        ])
    })
}
// Тип корневого 
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']