import styles from './lib/styles.module.css'
import sharedStyles from './../../../../Shared/styles.module.css'
import BasketItemsColumn from '../../../../Widgets/BasketItemsColumn'
import BasketSummary from '../../../../Widgets/BasketSummary'
import RestAPI from '../../../../../API/RestAPI'


const Body = () => {

    let { data } = RestAPI.useGetCartItemsQuery()

    let cart_items = data?.cart_items

    return <div className={sharedStyles.medium_max_width_container}>
        <div className={styles.main_container}>
            <BasketItemsColumn cart_items={cart_items} />
            <BasketSummary cart_items={cart_items} />
        </div>
    </div>
}

export default Body