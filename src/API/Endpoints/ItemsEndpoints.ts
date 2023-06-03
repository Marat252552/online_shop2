import { Item_T } from "../../Components/Shared/types"
import { Build_T } from "../types"
import { CreateItemReq_T } from "./types"

const GetItemsEndpoints = (build: Build_T ) => {
    return {
        createItem: build.mutation<{ response: boolean }, CreateItemReq_T>({
            query: (ReqData: CreateItemReq_T) => ({
                url: `/items`,
                method: 'POST',
                body: ReqData
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
        getItems: build.query<{ items: Item_T[] }, {types: string[], brands: string[]}>({
            query: ({types, brands}: {types: string[], brands: string[]}) => ({
                url: `/items`,
                params: {
                    types: JSON.stringify(types),
                    brands: JSON.stringify(brands)
                }
            }),

            providesTags: ['getItems']
        }),
        getItem: build.query<{ item: Item_T }, {_id: string}>({
            query: ({_id}: {_id: string}) => ({
                url: `/items/item/${_id}`
            }),
            providesTags: ['getItems']
        }),
        addRating: build.mutation<{ response: boolean }, {value: number, item_id: string}>({
            query: ({value, item_id}: {value: number, item_id: string}) => ({
                url: `/items/rating`,
                method: 'POST',
                body: {
                    value, item_id
                }
            }),
            invalidatesTags: ['getItems']
        }),
        getRating: build.query<{ rating: number }, {item_id: string}>({
            query: ({item_id}: {item_id: string}) => ({
                url: `/items/rating`,
                params: {
                    item_id
                }
            }),
            providesTags: ['getItems']
        }),
    }
}

export default GetItemsEndpoints