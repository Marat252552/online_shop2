import { LoginReq_T, SigninReq_T, User_T } from "../../Components/Shared/types"
import { SigninDataResponse_T } from "../AuthAPI/types"
import { Build_T } from "../types"


const GetAuthEndpoints = (build: Build_T ) => {
    return {
        isLoginDupl: build.mutation<{ response: boolean }, string>({
            query: (login: string = '') => ({
                url: `/auth/islogindupl`,
                method: 'POST',
                body: { login }
            })
        }),
        logout: build.mutation<void, void>({
            query: () => ({
                url: '/auth/logout',
                method: 'DELETE'
            }),
            invalidatesTags: ['getCartItems', 'getCartItemAmount', 'getItems', 'getFavorites']
        }),
        login: build.mutation<{ user: User_T, accessToken: string }, LoginReq_T>({
            query: (LoginReq: LoginReq_T) => ({
                url: '/auth/login',
                method: 'POST',
                body: LoginReq
            }),
            invalidatesTags: ['getCartItems', 'getCartItemAmount', 'getItems', 'getFavorites', 'getUsers']
        }),
        isLogged: build.query<{ user: User_T, accessToken: string }, void>({
            query: () => ({
                url: '/auth/islogged',
                params: {
                    accessToken: localStorage.getItem('accessToken')
                }
            })
        }),
        signin: build.mutation<SigninDataResponse_T, SigninReq_T>({
            query: (SigninReq: SigninReq_T) => ({
                url: `/auth/signin`,
                method: 'POST',
                body: SigninReq
            })
        }),
    }
}

export default GetAuthEndpoints


