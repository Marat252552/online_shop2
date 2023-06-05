import { LoginReq_T, SigninReq_T, User_T } from "../../Components/Shared/types"
import { Build_T } from "../types"


const GetAdminEndpoints = (build: Build_T ) => {
    return {
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
    }
}

export default GetAdminEndpoints


