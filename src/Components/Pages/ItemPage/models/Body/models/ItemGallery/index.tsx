import ScalableImage from '../../../../../../UI/ScalableImage'
import styles from './lib/styles.module.css'


const ItemGallery = () => {
    return <div className={styles.images_container}>
        <ScalableImage />
        <ScalableImage />
    </div>
}

export default ItemGallery