import styles from './lib/styles.module.css'
import sharedStyles from './../../../../Shared/styles.module.css'
import BasketItemsColumn from '../../../../Widgets/BasketItemsColumn'
import BasketSummary from '../../../../Widgets/BasketSummary'
import RestAPI from '../../../../../API/RestAPI'
import { getItemAPI } from '../../../../../API/AxiosAPI'
import { useEffect, useState } from 'react'

const Body = () => {

    let { data } = RestAPI.useGetCartItemsQuery()

    let delivery = 0
    
    let [total, setTotal] = useState<number>(0)

    useEffect(() => {
        if(!data?.cart_items) return
        data.cart_items.forEach(async (cart_item) => {
            let _id = cart_item.item_id
            try {
                let response = await getItemAPI({_id})
                let {price} = response.data.item
                setTotal(total + price)
            } catch(e) {
                console.log(e)
            }
        })
    }, [data])

    return <div className={sharedStyles.medium_max_width_container}>
        <div className={styles.main_container}>
            <BasketItemsColumn />
            <BasketSummary 
                delivery={delivery}
                subtotal={total}
                total={total}
            />
        </div>
    </div>
}

export default Body