import styles from './lib/styles.module.css'
import BasketItemSkeleton from "../../UI/BasketItemSkeleton"
import { FavoriteItemsColumn_T } from "./lib/types"
import { Empty } from 'antd';
import FavoriteItem from "../../Entities/FavoriteItem";


const FavoriteItemsColumn: FavoriteItemsColumn_T = ({ favorite_items, isError }) => {

    if (isError) return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
        <Empty description={
            <span>В избранном пусто</span>
        } image={Empty.PRESENTED_IMAGE_SIMPLE} />
    </div>

    return <div className={styles.basket_items_column}>

        {/* Skeletons to be shown while loading */}
        {!favorite_items && <>
            <BasketItemSkeleton />
            <BasketItemSkeleton />
            <BasketItemSkeleton />
        </>}

        {favorite_items && !favorite_items[0] && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
            <Empty description={
                <span>В избранном пусто</span>
            } image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </div>}

        {favorite_items && favorite_items.map((favorite_item) => {
            if (favorite_item) return <FavoriteItem favorite_item={favorite_item} />
        })}

    </div>
}

export default FavoriteItemsColumn