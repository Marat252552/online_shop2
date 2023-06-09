import { Item_T } from '../../../../../../Shared/types'
import ScalableImage from '../../../../../../UI/ScalableImage'
import styles from './lib/styles.module.css'


const ItemGallery = ({ item }: { item: Item_T }) => {
    return <div className={styles.images_container}>
        {item.images_links.map(img_link => {
            return <ScalableImage img_link={img_link} />
        })}
    </div>
}

export default ItemGallery