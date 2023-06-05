import { Rate } from "antd"
import RestAPI from "../../../../API/RestAPI"
import { Item_T } from "../../../Shared/types"



const Rating = ({ item }: { item: Item_T }) => {
    let [addRatingAPI] = RestAPI.useAddRatingMutation()
    let { data: ratingData, refetch: updateRating } = RestAPI.useGetRatingQuery({ item_id: item._id })

    let addRating = async (rating: number) => {
        await addRatingAPI({ item_id: item._id, value: rating })
        updateRating()
    }

    return <>
        <div style={{ display: 'flex', alignItems: 'end', gap: '5px' }}>
            <Rate
                allowHalf
                onChange={addRating}
                value={(ratingData) ? ratingData.rating : 0}
                defaultValue={0}
            />
            <span>{ratingData?.amount + ' отзывов' || + ' отзывов'}</span>
        </div>
    </>
}

export default Rating