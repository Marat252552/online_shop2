import { Rate } from 'antd'
import { Item_T } from '../../../../Shared/types'
import styles from './lib/styles.module.css'
import RestAPI from '../../../../../API/RestAPI'
import AddToCartButton from '../../../../UI/AddToCartButton'


const ItemAnnotation = ({ item }: { item: Item_T }) => {
    let [addRatingAPI] = RestAPI.useAddRatingMutation()
    let { data: ratingData, refetch: updateRating } = RestAPI.useGetRatingQuery({ item_id: item._id })

    let addRating = async (rating: number) => {
        await addRatingAPI({ item_id: item._id, value: rating })
        updateRating()
    }

    return <div className={styles.container}>
        <div style={{display: 'flex', alignItems: 'end', gap: '5px'}}>
            <Rate allowHalf onChange={addRating} value={(ratingData) ? ratingData.rating : 0} defaultValue={0} />
            <span>{ratingData?.amount + ' отзывов' || + ' отзывов'}</span>
        </div>

        <span style={{ color: '#C28160', fontWeight: 'bold' }}>{item?.name}</span>
        <span>{item?.description}</span>
        <span style={{ fontWeight: 'bold' }}>{item?.price} ₽</span>

        <AddToCartButton item={item} />
    </div>
}

export default ItemAnnotation