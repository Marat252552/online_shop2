import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/dist/query"
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions"
import { Item_T } from "../../Components/Shared/types"
import { Build_T } from "../types"

const GetItemsEndpoints = (build: Build_T ) => {
    return {
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
    }
}

export default GetItemsEndpoints