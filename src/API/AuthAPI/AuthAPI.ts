import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { SigninData_T } from '../../Components/Shared/types'
import { SigninDataResponse_T } from './types'

let baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3000/auth'
})

let baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result.error && result.error.status === 401) {
        console.log('Trying to get new token')
        // try to get a new token
        const refreshResult = await baseQuery('/refresh', api, extraOptions)
        if (refreshResult.meta?.response?.status === 200) {
            // store the new token

            console.log('Token recieved')
            // retry the initial query
            result = await baseQuery(args, api, extraOptions)
        } else {
            console.log('Token error')
        }
    }
    return result
}

const AuthAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
        isLoginDupl: build.mutation<{ response: boolean }, string>({
            query: (login: string = '') => ({
                url: `/islogindupl`,
                method: 'POST',
                body: { login }
            })
        }),
        isLogged: build.query({
            query: () => ({
                url: '/islogged',
                params: {
                    AccessToken: localStorage.getItem('AccessToken')
                }
            })
        }),
        signin: build.mutation<SigninDataResponse_T, SigninData_T>({
            query: (data: SigninData_T) => ({
                url: `/signin`,
                method: 'POST',
                body: { ...data }
            })
        }),
    })
})

export default AuthAPI