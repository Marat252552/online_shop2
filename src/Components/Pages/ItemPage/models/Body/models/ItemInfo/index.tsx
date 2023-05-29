import ItemAnnotation from '../../../../../../Entities/Item/models/ItemAnnotation'
import { Item_T } from '../../../../../../Shared/types'
import ScalableImage from '../../../../../../UI/ScalableImage'
import ItemGallery from '../ItemGallery'
import styles from './lib/styles.module.css'


const ItemInfo = () => {
    let item: Item_T = {name: 'Iphone', price: '20 000', status: 'Just in'}
    return <div className={styles.container}>
        <ItemGallery />
        <ItemAnnotation item={item}/>
    </div>
}

export default ItemInfo