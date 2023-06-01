import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { LoginReq_T, SigninReq_T, User_T } from '../../Components/Shared/types'
import { SigninDataResponse_T } from './types'
import UserSlice from '../../state/Reducers/UserSlice'

let baseQuery: BaseQueryFn<
    string | FetchArgs,
    any,
    FetchBaseQueryError
> = fetchBaseQuery({
    baseUrl: 'http://localhost:3000/auth',
    credentials: 'include',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('accessToken')
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

let baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    // @ts-ignore
    if (result?.error?.originalStatus! === 403) {
        const { setToken, setUser } = UserSlice.actions
        const refreshResult = await baseQuery('/refresh', api, extraOptions)
        if (refreshResult.data) {
            let { user, accessToken } = refreshResult.data
            api.dispatch(setUser({ user }))
            api.dispatch(setToken({ accessToken }))
        } else {
            api.dispatch(UserSlice.actions.logout())
        }
        result = await baseQuery(args, api, extraOptions)

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
        logout: build.mutation<void, void>({
            query: () => ({
                url: '/logout',
                method: 'DELETE'
            })
        }),
        login: build.mutation<{ user: User_T, accessToken: string }, LoginReq_T>({
            query: (LoginReq: LoginReq_T) => ({
                url: '/login',
                method: 'POST',
                body: LoginReq
            })
        }),
        isLogged: build.query<{ user: User_T, accessToken: string }, void>({
            query: () => ({
                url: '/islogged',
                params: {
                    accessToken: localStorage.getItem('accessToken')
                }
            })
        }),
        signin: build.mutation<SigninDataResponse_T, SigninReq_T>({
            query: (SigninReq: SigninReq_T) => ({
                url: `/signin`,
                method: 'POST',
                body: SigninReq
            })
        }),
    })
})

export default AuthAPI