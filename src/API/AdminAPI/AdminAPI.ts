import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import UserSlice from '../../state/Reducers/UserSlice'
import { User_T } from '../../Components/Shared/types'

let baseQuery: BaseQueryFn<
    string | FetchArgs,
    any,
    FetchBaseQueryError
> = fetchBaseQuery({
    baseUrl: 'http://localhost:3000/admin',
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

const AdminAPI = createApi({
    reducerPath: 'adminAPI',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['getUsers'],
    endpoints: (build) => ({
        getUsers: build.query<{ users: User_T[]}, void>({
            query: () => ({
                url: '/users'
            }),
            providesTags: ['getUsers']
        }),
        deleteUser: build.mutation<void, {_id: string}>({
            query: ({_id}: {_id: string}) => ({
                url: '/users',
                method: 'DELETE',
                params: { _id }
            }),
            invalidatesTags: ['getUsers']
        }),
        grantAccess: build.mutation<void, {_id: string}>({
            query: ({_id}: {_id: string}) => ({
                url: '/access',
                method: 'PUT',
                body: { _id }
            }),
            invalidatesTags: ['getUsers']
        }),
        lowerAccess: build.mutation<void, {_id: string}>({
            query: ({_id}: {_id: string}) => ({
                url: '/access',
                method: 'DELETE',
                body: { _id }
            }),
            invalidatesTags: ['getUsers']
        }),
    })
})

export default AdminAPI