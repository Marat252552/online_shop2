import FilterBar from '../../../../Widgets/FilterBar'
import ThreeItemsRow from '../../../../Widgets/ThreeItemsRow'
import styles from './lib/styles.module.css'
import sharedStyles from './../../../../Shared/styles.module.css'
import { PartitionOutlined } from '@ant-design/icons'
import MobileFilterNavbar from '../../../../Widgets/MobileFilterNavbar'


const Body = () => {
    let itemsRows = []
    for (let index = 0; index < 10; index++) {
        itemsRows.push(index)
    }
    return <div className={sharedStyles.max_width_container}>
        <div className={styles.container}>

            <FilterBar />

            <div className={styles.items_module_container}>
                <MobileFilterNavbar />
                {itemsRows.map(el => <ThreeItemsRow key={el} />)}
            </div>
        </div>
    </div>
}

export default Body