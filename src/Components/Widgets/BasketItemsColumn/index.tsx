import BasketItem from "../../Entities/BasketItem"
import styles from './lib/styles.module.css'

const BasketItemsColumn = () => {
    return <div className={styles.basket_items_column}>
        <BasketItem />
        <BasketItem />
    </div>
}

export default BasketItemsColumn