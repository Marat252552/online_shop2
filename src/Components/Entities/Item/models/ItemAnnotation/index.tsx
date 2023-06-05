import { Item_T } from '../../../../Shared/types'
import styles from './lib/styles.module.css'
import FavoriteButton from '../../../../Features/Buttons/FavoriteButton'
import Rating from '../../../../Features/Other/Rating'
import CartButton from '../../../../Features/Buttons/CartButton'
import RestAPI from '../../../../../API/RestAPI'


const ItemAnnotation = ({ item }: { item: Item_T }) => {

    let {data} = RestAPI.useGetBrandsQuery()

    

    return <div className={styles.container}>
        <Rating item={item}/>

        <span style={{ color: '#C28160', fontWeight: 'bold' }}>{item?.name}</span>
        <span>{item?.description.slice(0, 20)} ...</span>

        <FavoriteButton item={item}/>

        <span style={{ fontWeight: 'bold' }}>{item?.price} ₽</span>

        <CartButton item={item} />
    </div>
}

export default ItemAnnotation