import { HeartFilled, HeartOutlined, LoadingOutlined } from "@ant-design/icons"
import { Item_T } from "../../../Shared/types"
import RestAPI from "../../../../API/RestAPI"
import SkeletonButton from "antd/es/skeleton/Button"
import { Spin } from "antd"



const FavoriteButton = ({ item }: { item: Item_T }) => {

    let { data, refetch, isLoading } = RestAPI.useGetFavoritesQuery()

    let [addFavoriteAPI, { isLoading: isLoadingAdd }] = RestAPI.useAddFavoriteMutation()
    let [removeFavoriteAPI, { isLoading: isLoadingRemove }] = RestAPI.useRemoveFavoriteMutation()

    const addFavorite = async () => {
        await addFavoriteAPI({ item_id: item._id })
        refetch()
    }

    let favorite_items = data?.favorite_items

    if (isLoading) {
        return <SkeletonButton />
    }

    if (isLoadingAdd || isLoadingRemove) {
        return <div>
            <Spin indicator={<LoadingOutlined style={{ fontSize: 24, color: 'black' }} spin />} />
        </div>
    }

    if (!favorite_items) {
        return <div><HeartOutlined /></div>
    }

    let favoriteItem = favorite_items.find(favorite_item => {
        return favorite_item.item_id === item._id
    })

    const removeFavorite = async () => {
        await removeFavoriteAPI({ favorite_item_id: favoriteItem!._id })
        refetch()
    }

    return <div>

        {
            (favoriteItem) ?
                <HeartFilled onClick={removeFavorite} />
                :
                <HeartOutlined onClick={addFavorite} />
        }

    </div>
}

export default FavoriteButton