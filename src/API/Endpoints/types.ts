import { Item_T } from "../../Components/Shared/types"

export type CreateItemReq_T = {
    session_id: string,
    payload: {
        name: string
        brand_id: string,
        description: string,
        price: number,
        type_id: string,
        filesUIDs: string[],
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