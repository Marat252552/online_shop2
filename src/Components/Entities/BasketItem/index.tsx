import RestAPI from '../../../API/RestAPI'
import { CartItem_T } from '../../Shared/types'
import BasketItemDescription from '../BaksetItemDescription'
import BasketItemPrice from '../BasketItemPrice'
import ItemImage from '../ItemImage'
import styles from './lib/styles.module.css'


const BasketItem = ({ cart_item }: { cart_item: CartItem_T }) => {

    let { data } = RestAPI.useGetItemQuery({ _id: cart_item.item_id })

    let item = data?.item

    return <>
        {item && <div className={styles.main_container}>

            <div className={styles.image_and_description_module}>
                <div className={styles.image_container}>
                    <ItemImage img_name={item.main_img_name} />
                </div>
                <BasketItemDescription item={item} />
            </div>
            <BasketItemPrice price={item.price} />

        </div>}

    </>


}

export default BasketItem