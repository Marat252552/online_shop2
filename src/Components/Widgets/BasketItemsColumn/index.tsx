import { Skeleton } from "antd"
import RestAPI from "../../../API/RestAPI"
import BasketItem from "../../Entities/BasketItem"
import styles from './lib/styles.module.css'
import BasketItemSkeleton from "../../UI/BasketItemSkeleton"

const BasketItemsColumn = ({cart_items} : {cart_items: [undefined] | CartItem_T[] | undefined}) => {


    return <div className={styles.basket_items_column}>

        {/* Skeletons to be shown while loading */}
        {!cart_items && <>
            <BasketItemSkeleton />
            <BasketItemSkeleton />
            <BasketItemSkeleton />
        </>}

        {cart_items && cart_items.map((cart_item) => {
            if (cart_item) return <BasketItem cart_item={cart_item} />
        })}

    </div>
}

export default BasketItemsColumn