import ItemAnnotation from '../../../../../../Entities/Item/models/ItemAnnotation'
import { Item_T } from '../../../../../../Shared/types'
import ImagePreviewGroup from '../ImagePreviewGroup'
import styles from './lib/styles.module.css'


const ItemInfo = ({item}: {item: Item_T}) => {
    return <div className={styles.container}>
        <ImagePreviewGroup item={item}/>
        {/* <ItemGallery item={item}/> */}
        <ItemAnnotation item={item}/>
    </div>
}

export default ItemInfo