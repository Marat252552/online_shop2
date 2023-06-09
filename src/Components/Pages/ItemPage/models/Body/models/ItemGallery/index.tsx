import { Item_T } from '../../../../../../Shared/types'
import ScalableImage from '../../../../../../UI/ScalableImage'
import styles from './lib/styles.module.css'


const ItemGallery = ({ item }: { item: Item_T }) => {
    return <div className={styles.images_container}>
        {item.images.map(image => {
            return <ScalableImage img_link={image.link} />
        })}
    </div>
}

export default ItemGallery