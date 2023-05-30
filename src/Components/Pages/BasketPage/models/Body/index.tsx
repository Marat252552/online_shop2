import BasketItem from '../../../../Entities/BasketItem'
import styles from './lib/styles.module.css'
import sharedStyles from './../../../../Shared/styles.module.css'

const Body = () => {
    return <div className={sharedStyles.max_width_container}>
        <div className={styles.basket_items_column}>
            <BasketItem />
            <BasketItem />
        </div>
    </div>
}

export default Body