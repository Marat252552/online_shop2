import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { Brand_T, Type_T } from '../../Components/Shared/types'
import baseQueryWithReauth from '../BaseQueryWithReauth'


const TypesAPI = createApi({
    reducerPath: 'typesAPI',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['getTypes'],
    endpoints: (build) => ({
        createType: build.mutation<{ response: boolean }, {name: string}>({
            query: ({name}: {name: string}) => ({
                url: `/types`,
                method: 'POST',
                body: {name}
            }),
            invalidatesTags: ['getTypes']
        }),
        deleteType: build.mutation<void, {_id: string}>({
            query: ({_id}: {_id: string}) => ({
                url: `/types`,
                method: 'DELETE',
                body: { _id }
            }),
            invalidatesTags: ['getTypes']
        }),
        getTypes: build.query<{ types: Type_T[] }, void>({
            query: () => ({
                url: `/types`,
            }),
            providesTags: ['getTypes']
        }),
    })
})

export default TypesAPI