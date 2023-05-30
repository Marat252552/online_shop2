import BasketItemDescription from '../BaksetItemDescription'
import BasketItemPrice from '../BasketItemPrice'
import ItemImage from '../ItemImage'
import styles from './lib/styles.module.css'


const BasketItem = () => {
    return <div className={styles.main_container}>
        <div className={styles.image_and_description_module}>
            <div className={styles.image_container}>
                <ItemImage />
            </div>
            <BasketItemDescription />
        </div>
        <BasketItemPrice price={20000} />
    </div>
}

export default BasketItem