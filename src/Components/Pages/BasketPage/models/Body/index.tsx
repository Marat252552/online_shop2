import styles from './lib/styles.module.css'
import sharedStyles from './../../../../Shared/styles.module.css'
import BasketSummary from '../../../../Widgets/BasketSummary'
import RestAPI from '../../../../../API/RestAPI'
import BasketItemsColumn from '../../../../Widgets/BasketItemsColumn'


const Body = () => {

    let { data, error } = RestAPI.useGetCartItemsQuery()

    let cart_items = data?.cart_items

    return <div className={sharedStyles.medium_max_width_container}>
        <div className={styles.main_container}>
            <BasketItemsColumn error={error} cart_items={cart_items} />
            <BasketSummary error={error} cart_items={cart_items} />
        </div>
    </div>
}

export default Body