import { Item_T } from "../../Components/Shared/types"
import { Build_T } from "../types"
import { AddRatingReq_T, CreateItemReq_T, GetItemsReq_T, GetItemsRes_T } from "./types"

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
        getItems: build.query<GetItemsRes_T, GetItemsReq_T>({
            query: ({types, brands, searchValue}: GetItemsReq_T) => ({
                url: `/items`,
                params: {
                    types: JSON.stringify(types),
                    brands: JSON.stringify(brands),
                    searchValue
                }
            }),

            providesTags: ['getItems']
        }),
        getItem: build.query<{ item: Item_T }, {_id: string}>({
            query: ({_id}: {_id: string}) => ({
                url: `/items/item/${_id}`
            })
        }),
        addRating: build.mutation<{ response: boolean }, AddRatingReq_T>({
            query: ({value, item_id}: AddRatingReq_T) => ({
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
        }),
    }
}

export default GetItemsEndpoints