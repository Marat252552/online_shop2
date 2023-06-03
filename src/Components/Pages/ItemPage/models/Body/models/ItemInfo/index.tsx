import ItemAnnotation from '../../../../../../Entities/Item/models/ItemAnnotation'
import { Item_T } from '../../../../../../Shared/types'
import ItemGallery from '../ItemGallery'
import styles from './lib/styles.module.css'


const ItemInfo = ({item}: {item: Item_T}) => {
    return <div className={styles.container}>
        <ItemGallery />
        <ItemAnnotation item={item}/>
    </div>
}

export default ItemInfo