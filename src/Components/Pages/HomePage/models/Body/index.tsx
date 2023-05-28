import styles from './lib/styles.module.css'
import sharedStyles from './../../../../Shared/styles.module.css'
import BestItem from '../../../../Entities/BestItem'
import Item from '../../../../Entities/Item'

const Body = () => {
    return <div className={sharedStyles._container}>
        <BestItem />
        <div className={styles.items_row}>
            <Item />
            <Item />
            <Item />
        </div>
    </div>
}

export default Body