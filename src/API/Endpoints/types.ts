import { Item_T } from "../../Components/Shared/types"

export type CreateItemReq_T = {
    session_id: string,
    payload: {
        name: string
        brand_id: string,
        description: string,
        price: number,
        type_id: string,
        imagesUIDs: string[],
        mainFileUID: string
    }
}

export type GetItemsReq_T = {
    types: string[],
    brands: string[],
    searchValue: string
}

export type GetItemsRes_T = {
    items: Item_T[]
}

export type AddRatingReq_T = {
    value: number,
    item_id: string
}

export type AddItemToCartItemReq_T = {
    item_id: string
}

export type RemoveAllSameItemsFromCart_T = {
    item_id: string
}

export type RemoveItemFromCartReq_T = {
    item_id: string
}

export type GetCartItemAmountReq_T = {
    item_id: string
}

export type AddFavoriteReq_T = {
    item_id: string
}

export type RemoveFavoriteReq_T = {
    favorite_item_id: string
}

export type BestItem_T = {
    item: Item_T,
    rating: number
}

export type GetThreeBestItemsDataRes_T = {
    items: {
        item1: BestItem_T,
        item2: BestItem_T,
        item3: BestItem_T
    }
}