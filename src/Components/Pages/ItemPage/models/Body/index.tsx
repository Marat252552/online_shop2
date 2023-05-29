import ItemImage from '../../../../Entities/ItemImage'
import styles from './lib/styles.module.css'
import ItemInfo from './models/ItemInfo'


const Body = () => {
    return <div className={styles.mainContainer}>
        <div className={styles.image_container}>
            <ItemImage />
        </div>
        <ItemInfo />
    </div>
}

export default Body