import Item from '../../Entities/Item'
import styles from './lib/styles.module.css'


const ThreeItemsRow = () => {
    return <div className={styles.items_row}>
        <Item />
        <Item />
        <Item />
    </div>
}

export default ThreeItemsRow