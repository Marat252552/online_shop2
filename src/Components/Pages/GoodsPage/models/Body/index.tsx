import FilterBar from '../../../../Widgets/FilterBar'
import ThreeItemsRow from '../../../../Widgets/ThreeItemsRow'
import styles from './lib/styles.module.css'
import sharedStyles from './../../../../Shared/styles.module.css'
import { PartitionOutlined } from '@ant-design/icons'
import MobileFilterNavbar from '../../../../Widgets/MobileFilterNavbar'
import LargeModuleTemplate from '../../../../Templates/Modules/LargeModuleTemplate'
import { Element_T } from '../../../../Entities/FilterModule/lib/types'


const Body = () => {
    let itemsRows = []
    for (let index = 0; index < 10; index++) {
        itemsRows.push(index)
    }
    let elements: Element_T[] = [
        {value: 'wadawd', title: 'Холодильники'},
        {value: 'wadawd', title: 'Холодильники'},
        {value: 'wadawd', title: 'Холодильники'},
        {value: 'wadawd', title: 'Холодильники'},
        {value: 'wadawd', title: 'Холодильники'},
        {value: 'wadawd', title: 'Холодильники'},
        {value: 'wadawd', title: 'Холодильники'},
        {value: 'wadawd', title: 'Холодильники'},
    ]
    return <>
        <LargeModuleTemplate>
            <div className={styles.container}>

                <FilterBar elements={elements} />

                <div className={styles.items_module_container}>
                    <MobileFilterNavbar />
                    {itemsRows.map(el => <ThreeItemsRow key={el} />)}
                </div>
            </div>
        </LargeModuleTemplate>
    </>
}

export default Body