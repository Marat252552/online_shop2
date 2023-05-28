import styles from './lib/styles.module.css'
import iphone14pro from './../../../../../Assets/Images/iphone14pro.jpg'

const ItemImage = () => {
    return <div className={styles.square}>
        <img src={iphone14pro} />
    </div>
}

export default ItemImage