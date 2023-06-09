import { FavoriteItem_T } from "../../Components/Shared/types"
import { Build_T } from "../types"
import { AddFavoriteReq_T, RemoveFavoriteReq_T } from "./types"


const GetFavoritesEndpoints = (build: Build_T ) => {
    return {
        addFavorite: build.mutation<void, AddFavoriteReq_T>({
            query: ({item_id}: AddFavoriteReq_T) => ({
                url: `/favorites/${item_id}`,
                method: 'POST'
            })
        }),
        removeFavorite: build.mutation<void, RemoveFavoriteReq_T>({
            query: ({favorite_item_id}: RemoveFavoriteReq_T) => ({
                url: `/favorites/${favorite_item_id}`,
                method: 'DELETE'
            })
        }),
        getFavorites: build.query<{favorite_items: FavoriteItem_T[]}, void>({
            query: () => ({
                url: `/favorites`,
            }),
            providesTags: ['getFavorites']
        })
    }
}

export default GetFavoritesEndpoints