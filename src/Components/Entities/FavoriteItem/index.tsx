import RestAPI from '../../../API/RestAPI'
import { FavoriteItem_T } from '../../Shared/types'
import BasketItemDescription from '../BaksetItemDescription'
import BasketItemPrice from '../BasketItemPrice'
import ItemImage from '../ItemImage'
import styles from './lib/styles.module.css'


const FavoriteItem = ({ favorite_item }: { favorite_item: FavoriteItem_T }) => {

    let { data } = RestAPI.useGetItemQuery({ _id: favorite_item.item_id })

    let item = data?.item

    return <>
        <div className={styles.main_container}>

            {item && <>
                <div className={styles.image_and_description_module}>
                    <div className={styles.image_container}>
                        <ItemImage src={item.main_image.link} />
                    </div>
                    <BasketItemDescription item={item} />
                </div>
                <BasketItemPrice price={item.price} />
            </>}

        </div>
    </>


}

export default FavoriteItem