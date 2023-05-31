import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { SigninData_T } from '../Components/Shared/types'


const AuthAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/auth'
    }),
    endpoints: (build) => ({
        isLoginDupl: build.mutation<{response: boolean},string>({
            query: (login: string = '') => ({
                url: `/islogindupl`,
                method: 'POST',
                body: { login }
            })
        }),
        signin: build.mutation<any, SigninData_T>({
            query: (data: SigninData_T) => ({
                url: `/signin`,
                method: 'POST',
                body: {...data}
            })
        }),
        isLoggedIn: build.query({
            query: () => ({
                url: '/isloggedin'
            }),
        })
    })
})

export default AuthAPI