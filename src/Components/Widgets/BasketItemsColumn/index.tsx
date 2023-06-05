import BasketItem from "../../Entities/BasketItem"
import styles from './lib/styles.module.css'
import BasketItemSkeleton from "../../UI/BasketItemSkeleton"
import { BasketItemsColumn_T } from "./lib/types"
import { Empty } from 'antd';


const BasketItemsColumn: BasketItemsColumn_T = ({ cart_items, error }) => {
    // @ts-ignore
    if (error?.status) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
            <Empty description={
                <span>В избранном пусто</span>
            } image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </div>
    }

    return <div className={styles.basket_items_column}>


        {/* Skeletons to be shown while loading */}
        {!cart_items && <>
            <BasketItemSkeleton />
            <BasketItemSkeleton />
            <BasketItemSkeleton />
        </>}

        {cart_items && !cart_items[0] && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
            <Empty description={
                <span>В избранном пусто</span>
            } image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </div>}

        {cart_items && cart_items.map((cart_item) => {
            if (cart_item) return <BasketItem key={cart_item._id} cart_item={cart_item} />
        })}

    </div>
}

export default BasketItemsColumn