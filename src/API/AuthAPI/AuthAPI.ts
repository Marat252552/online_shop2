import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { LoginReq_T, SigninReq_T, User_T } from '../../Components/Shared/types'
import { SigninDataResponse_T } from './types'
import baseQueryWithReauth from '../BaseQueryWithReauth'


const AuthAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
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
            })
        }),
        login: build.mutation<{ user: User_T, accessToken: string }, LoginReq_T>({
            query: (LoginReq: LoginReq_T) => ({
                url: '/auth/login',
                method: 'POST',
                body: LoginReq
            })
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
    })
})

export default AuthAPI