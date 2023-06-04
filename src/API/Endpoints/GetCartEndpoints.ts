import { CartItem_T } from "../../Components/Shared/types"
import { Build_T } from "../types"
import { AddItemToCartItemReq_T, GetCartItemAmountReq_T, RemoveItemFromCartReq_T } from "./types"

const GetCartEndpoints = (build: Build_T ) => {
    return {
        addToCart: build.mutation<{ response: boolean }, AddItemToCartItemReq_T>({
            query: ({item_id}: AddItemToCartItemReq_T) => ({
                url: `/cart/${item_id}`,
                method: 'POST'
            }),
            invalidatesTags: ['getCartItems']
        }),
        removeFromCart: build.mutation<{ response: boolean }, AddItemToCartItemReq_T>({
            query: ({item_id}: RemoveItemFromCartReq_T) => ({
                url: `/cart/${item_id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['getCartItems']
        }),
        getCartItemAmount: build.query<{ amount: number}, GetCartItemAmountReq_T>({
            query: ({item_id}: GetCartItemAmountReq_T) => ({
                url: `/cart/${item_id}`,
            }),
        }),
        getCartItems: build.query<{ cart_items: CartItem_T[]}, void>({
            query: () => ({
                url: `/cart`,
            }),
            providesTags: ['getCartItems']
        })
    }
}

export default GetCartEndpoints