import styles from './lib/styles.module.css'
import iphone13 from './../../../Assets/Images/iphone13.png'

const ItemImage = () => {
    return <div className={styles.container}>
        <div className={styles.square}>
            <img src={iphone13} />
        </div>
    </div>
}

export default ItemImage