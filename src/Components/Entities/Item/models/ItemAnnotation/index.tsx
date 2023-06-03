import { Rate } from 'antd'
import { Item_T } from '../../../../Shared/types'
import styles from './lib/styles.module.css'
import RestAPI from '../../../../../API/RestAPI'


const ItemAnnotation = ({item}: {item: Item_T}) => {
    let [addRatingAPI] = RestAPI.useAddRatingMutation()
    let {data: ratingData} = RestAPI.useGetRatingQuery({item_id: item._id})
    
    let addRating = (rating: number) => {
        addRatingAPI({item_id: item._id, value: rating})
    }

    return <div className={styles.container}>
        <Rate allowHalf onChange={addRating} value={(ratingData)? ratingData.rating : 0} defaultValue={0} />
        <span style={{color: '#C28160', fontWeight: 'bold'}}>{item?.name}</span>
        <span style={{}}>{item?.description}</span>
        <span style={{fontWeight: 'bold'}}>{item?.price}</span>
    </div>
}

export default ItemAnnotation