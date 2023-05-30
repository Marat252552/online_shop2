import styles from './lib/styles.module.css'
import sharedStyles from './../../../../Shared/styles.module.css'
import BasketItemsColumn from '../../../../Widgets/BasketItemsColumn'
import BasketSummary from '../../../../Widgets/BasketSummary'

const Body = () => {
    return <div className={sharedStyles.medium_max_width_container}>
        <div className={styles.main_container}>
            <BasketItemsColumn />
            <BasketSummary />
        </div>
    </div>
}

export default Body