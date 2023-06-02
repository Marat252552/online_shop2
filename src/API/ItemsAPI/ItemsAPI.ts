import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { Brand_T, Item_T } from '../../Components/Shared/types'
import baseQueryWithReauth from '../BaseQueryWithReauth'


const ItemsAPI = createApi({
    reducerPath: 'itemsAPI',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['getItems'],
    endpoints: (build) => ({
        createItem: build.mutation<{ response: boolean }, any>({
            query: (formData: any) => ({
                url: `/items`,
                method: 'POST',
                body: formData
            }),
            invalidatesTags: ['getItems']
        }),
        deleteItem: build.mutation<void, {_id: string}>({
            query: ({_id}: {_id: string}) => ({
                url: `/items`,
                method: 'DELETE',
                body: { _id }
            }),
            invalidatesTags: ['getItems']
        }),
        getItems: build.query<{ items: Item_T[] }, void>({
            query: () => ({
                url: `/items`,
            }),
            providesTags: ['getItems']
        }),
    })
})

export default ItemsAPI