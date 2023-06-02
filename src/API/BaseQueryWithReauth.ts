import { BaseQueryFn, FetchArgs, FetchBaseQueryError, fetchBaseQuery } from "@reduxjs/toolkit/dist/query"
import UserSlice from "../state/Reducers/UserSlice"

let baseQuery: BaseQueryFn<
    string | FetchArgs,
    any,
    FetchBaseQueryError
> = fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
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
        const refreshResult = await baseQuery('/auth/refresh', api, extraOptions)
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

export default baseQueryWithReauth