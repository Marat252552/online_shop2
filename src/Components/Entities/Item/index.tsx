import { ItemStatus, Item_T } from '../../Shared/types'
import styles from './lib/styles.module.css'
import ItemAnnotation from './models/ItemAnnotation'
import ItemImage from './models/ItemImage'

const Item = () => {
    let item: Item_T = {name: 'Айфон 14', price: '20 000', status: ItemStatus.JustIn}
    return <div className={styles.container}>
        <ItemImage />
        <ItemAnnotation item={item}/>
    </div>
}

export default Item