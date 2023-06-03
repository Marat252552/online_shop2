import { Item_T } from '../../../../../../Shared/types'
import ScalableImage from '../../../../../../UI/ScalableImage'
import styles from './lib/styles.module.css'


const ItemGallery = ({ item }: { item: Item_T }) => {
    return <div className={styles.images_container}>
        {item.images_names.map(img_name => {
            return <ScalableImage img_name={img_name} />
        })}
    </div>
}

export default ItemGallery