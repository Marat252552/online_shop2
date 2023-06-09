import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { User_T } from '../../Components/Shared/types'
import baseQueryWithReauth from '../BaseQueryWithReauth'


const AdminAPI = createApi({
    reducerPath: 'adminAPI',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['getUsers'],
    endpoints: (build) => ({
        getUsers: build.query<{ users: User_T[]}, {statuses: string[]}>({
            query: ({statuses}: {statuses: string[]}) => ({
                url: '/admin/users',
                params: {
                    statuses: JSON.stringify(statuses)
                }
            }),
            providesTags: ['getUsers']
        }),
        deleteUser: build.mutation<void, {_id: string}>({
            query: ({_id}: {_id: string}) => ({
                url: '/admin/users',
                method: 'DELETE',
                params: { _id }
            }),
            invalidatesTags: ['getUsers']
        }),
        grantAccess: build.mutation<void, {_id: string}>({
            query: ({_id}: {_id: string}) => ({
                url: '/admin/access',
                method: 'PUT',
                body: { _id }
            }),
            invalidatesTags: ['getUsers']
        }),
        lowerAccess: build.mutation<void, {_id: string}>({
            query: ({_id}: {_id: string}) => ({
                url: '/admin/access',
                method: 'DELETE',
                body: { _id }
            }),
            invalidatesTags: ['getUsers']
        }),
    })
})

export default AdminAPI